# -*- coding: utf-8 -*-

import json

from django.conf import settings
from django.core.urlresolvers import reverse_lazy
from django.db.models import Q
from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render, get_list_or_404
from django.views.generic import View, CreateView, DetailView, ListView, UpdateView, \
    TemplateView, DeleteView

from ajaxuploader.views import AjaxFileUploader
from ajaxuploader.backends.default_storage import DefaultStorageUploadBackend
from braces.views import LoginRequiredMixin, AjaxResponseMixin, GroupRequiredMixin
from .models import Museum, Exhibition, Catalog, Media, Tag, Category, Review, Document
from .forms import MuseumForm, ExhibitionForm, CatalogForm, DocumentForm
from .services import export_pdf


def _get_exhibition(user, slug):
    return get_object_or_404(Exhibition, museum__id=user.museum.id, slug=slug)


def _get_catalog(museum_id, ex_slug, slug):
    return get_object_or_404(Catalog, exhibition__museum__id=museum_id,
                             exhibition__slug=ex_slug, slug=slug)


class Index(TemplateView):
    template_name = "web/index.html"

    def get_context_data(self, **kwargs):
        context = super(Index, self).get_context_data(**kwargs)
        context["tags"] = Tag.objects.tag_cloud()
        context["museums"] = Museum.objects.all().order_by("slug")
        context["exhibition_list"] = Exhibition.objects.filter(
            catalog__status=Catalog.STATUS.published
        ).distinct().order_by("-created")[:5]
        return context


class MuseumUpdate(LoginRequiredMixin, UpdateView):
    model = Museum
    form_class = MuseumForm
    template_name = "web/museum_form.html"
    success_url = reverse_lazy("exhibition.admin")

    def get_object(self):
        return Museum.objects.get(id=self.request.user.museum.id)


class MuseumDetail(DetailView):
    model = Museum
    template_name = "web/museum_detail.html"

    def get_object(self):
        return get_object_or_404(Museum, slug=self.kwargs.get("slug", None))

    def get_context_data(self, **kwargs):
        context = super(MuseumDetail, self).get_context_data(**kwargs)
        context["exhibition_list"] = Exhibition.objects.filter(
            museum__slug=self.kwargs.get("slug"), catalog__status=Catalog.STATUS.published
        ).distinct()[:9]
        return context


class ExhibitionAdmin(LoginRequiredMixin, ListView):
    template_name = "web/exhibition_admin.html"

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated() and not hasattr(request.user, "museum"):
            return redirect("login/")
        else:
            return super(ExhibitionAdmin, self).dispatch(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(ExhibitionAdmin, self).get_context_data(**kwargs)
        context["catalog_form"] = CatalogForm()
        return context

    def get_queryset(self):
        return Exhibition.objects.filter(museum__id=self.request.user.museum.id)


class ExhibitionCreate(LoginRequiredMixin, CreateView):
    form_class = ExhibitionForm
    template_name = "web/exhibition_form.html"
    success_url = reverse_lazy("exhibition.admin")

    def form_valid(self, form):
        form.instance.museum = self.request.user.museum
        return super(ExhibitionCreate, self).form_valid(form)


class ExhibitionUpdate(LoginRequiredMixin, UpdateView):
    model = Exhibition
    form_class = ExhibitionForm
    template_name = "web/exhibition_form.html"
    success_url = reverse_lazy("exhibition.admin")

    def get_object(self, queryset=None):
        return _get_exhibition(self.request.user, self.kwargs["slug"])


class ExhibitionList(ListView):
    template_name = "web/exhibition_list.html"

    def get_queryset(self):
        return Exhibition.objects.filter(
                catalog__status=Catalog.STATUS.published
        ).distinct().order_by("-created")[:30]

    def get_context_data(self, **kwargs):
        context = super(ExhibitionList, self).get_context_data(**kwargs)
        context["categories"] = Category.objects.all().order_by("slug")
        context["tags"] = Tag.objects.all().order_by("slug")
        context["museums"] = Museum.objects.all().order_by("slug")
        return context


class ExhibitionSearch(AjaxResponseMixin, View):
    def get_ajax(self, request):
        query = Q()

        search = request.GET.get("search", "")
        if search:
            query = query & (Q(title__icontains=search) |
                             Q(subtitle__icontains=search) |
                             Q(description__icontains=search))

        category = request.GET.get("category", "")
        if category:
            query = query & Q(category__slug=category)

        tag = request.GET.get("tag", "")
        if tag:
            query = query & Q(tags__slug=tag)

        museum = request.GET.get("museum", "")
        if museum:
            query = query & Q(museum__slug=museum)

        context = {
            "exhibition_list": Exhibition.objects.filter(
                    query, catalog__status=Catalog.STATUS.published
            ).distinct().order_by("-created")[:30]
        }

        return render(request, "web/_exhibition_items.html", context)


class ExhibitionDetail(DetailView):
    model = Exhibition
    template_name = "web/exhibition_detail.html"

    def get_object(self):
        return get_object_or_404(
            Exhibition, museum__slug=self.kwargs.get("m_slug"), slug=self.kwargs.get("slug")
        )

    def get_context_data(self, **kwargs):
        context = super(ExhibitionDetail, self).get_context_data(**kwargs)
        context["catalog_list"] = Catalog.objects.filter(
            exhibition__slug=self.kwargs.get("slug"), status=Catalog.STATUS.published
        )
        return context


class CatalogCreate(LoginRequiredMixin, CreateView):
    form_class = CatalogForm

    def form_valid(self, form):
        form.instance.exhibition = _get_exhibition(self.request.user, self.kwargs["slug"])
        return super(CatalogCreate, self).form_valid(form)


class CatalogPreview(LoginRequiredMixin, DetailView):
    model = Catalog
    template_name = "web/catalog_view.html"

    def get_object(self):
        return _get_catalog(
            self.request.user.museum.id, self.kwargs.get("ex_slug"), self.kwargs.get("slug")
        )

    def get_context_data(self, **kwargs):
        context = super(CatalogPreview, self).get_context_data(**kwargs)
        context["action"] = "preview"
        return context


class CatalogEditor(LoginRequiredMixin, UpdateView):
    model = Catalog
    form_class = CatalogForm
    template_name = "web/catalog_editor.html"

    def get_object(self):
        return get_object_or_404(Catalog, exhibition__museum__id=self.request.user.museum.id,
                                 exhibition__slug=self.kwargs.get("ex_slug"),
                                 slug=self.kwargs.get("slug"), status__in=["created", "rejected"])

    def get_context_data(self, **kwargs):
        context = super(CatalogEditor, self).get_context_data(**kwargs)
        context["catalog_form"] = CatalogForm()
        context["ckeditor_settings"] = settings.CKEDITOR_CONFIGS
        return context


class CatalogView(LoginRequiredMixin, AjaxResponseMixin, View):
    def post_ajax(self, request, ex_slug, slug):
        catalog = _get_catalog(self.request.user.museum.id, ex_slug, slug)
        catalog.content = json.loads(request.body)
        catalog.save()
        return HttpResponse("ok")

    def delete_ajax(self, request, ex_slug, slug):
        catalog = _get_catalog(self.request.user.museum.id, ex_slug, slug)
        catalog.delete()
        return HttpResponse("ok")


class CatalogExport(LoginRequiredMixin, AjaxResponseMixin, View):
    def get(self, request, ex_slug, slug):
        catalog = _get_catalog(self.request.user.museum.id, ex_slug, slug)
        export_pdf(catalog)

        response_data = {
            "file": "/" + catalog.get_pdf_filename()
        }

        return HttpResponse(json.dumps(response_data), content_type="application/json")


class CatalogPublish(LoginRequiredMixin, AjaxResponseMixin, View):
    def post_ajax(self, request, ex_slug, slug):
        catalog = _get_catalog(self.request.user.museum.id, ex_slug, slug)
        data = json.loads(request.body)

        if data["issuu"]:
            catalog.set_issuu_url()

        if data["pdf"]:
            catalog.pdf_available = True

        catalog.status = catalog.STATUS.review
        catalog.save()

        return HttpResponse()


class CatalogReview(LoginRequiredMixin, GroupRequiredMixin, AjaxResponseMixin, View):
    group_required = "revisor"

    def get(self, request, m_slug, ex_slug, slug):
        review = get_list_or_404(Review.objects.order_by("-created"), reviewer=self.request.user,
                                 catalog__exhibition__museum__slug=m_slug,
                                 catalog__exhibition__slug=ex_slug,
                                 catalog__slug=slug)

        return render(request, 'web/catalog_view.html',
                      {"review": review[0], "action": "review"})

    def post_ajax(self, request, m_slug, ex_slug, slug):
        data = json.loads(request.body)

        review = Review.objects.get(id=data["review_id"])

        if data["action"] == "approve":
            review.approved = True
        else:
            review.approved = False
            review.comments = data["comments"]

        review.save()

        return HttpResponse()


class CatalogDetail(DetailView):
    model = Catalog
    template_name = "web/catalog_view.html"

    def get_object(self):
        return get_object_or_404(Catalog, exhibition__museum__slug=self.kwargs.get("m_slug"),
                                 exhibition__slug=self.kwargs.get("ex_slug"),
                                 slug=self.kwargs.get("slug"))

    def get_context_data(self, **kwargs):
        context = super(CatalogDetail, self).get_context_data(**kwargs)
        context["hostname"] = settings.HOSTNAME
        context["action"] = "view"
        return context


class CatalogPrint(DetailView):
    model = Catalog
    template_name = "web/catalog_print.html"

    def get_object(self):
        return get_object_or_404(Catalog, exhibition__museum__slug=self.kwargs.get("m_slug"),
                                 exhibition__slug=self.kwargs.get("ex_slug"),
                                 slug=self.kwargs.get("slug"))


class DocumentList(LoginRequiredMixin, ListView):
    template_name = "web/document_list.html"

    def get_context_data(self, **kwargs):
        context = super(DocumentList, self).get_context_data(**kwargs)
        context["catalog"] = _get_catalog(
            self.request.user.museum.id, self.kwargs.get("ex_slug"), self.kwargs.get("slug")
        )
        context["review"] = False
        return context

    def get_queryset(self):
        return Document.objects.filter(
            catalog__exhibition__museum__id=self.request.user.museum.id,
            catalog__exhibition__slug=self.kwargs.get("ex_slug"),
            catalog__slug=self.kwargs.get("slug")
        )


class DocumentCreate(LoginRequiredMixin, CreateView):
    form_class = DocumentForm
    template_name = "web/document_form.html"

    def get_success_url(self, **kwargs):
        return reverse_lazy("document.list", args=(self.kwargs["ex_slug"], self.kwargs["slug"]))

    def get_context_data(self, **kwargs):
        context = super(DocumentCreate, self).get_context_data(**kwargs)
        context["catalog"] = _get_catalog(
            self.request.user.museum.id, self.kwargs.get("ex_slug"), self.kwargs.get("slug")
        )
        return context

    def form_valid(self, form):
        form.instance.catalog = _get_catalog(
            self.request.user.museum.id, self.kwargs["ex_slug"], self.kwargs["slug"]
        )
        return super(DocumentCreate, self).form_valid(form)


class DocumentDelete(LoginRequiredMixin, DeleteView):
    model = Document
    template_name = "web/document_delete.html"

    def get_object(self):
        return get_object_or_404(Document, id=self.kwargs.get("id"))

    def get_context_data(self, **kwargs):
        context = super(DocumentDelete, self).get_context_data(**kwargs)
        context["catalog"] = _get_catalog(
            self.request.user.museum.id, self.kwargs.get("ex_slug"), self.kwargs.get("slug")
        )
        return context

    def get_success_url(self, **kwargs):
        return reverse_lazy("document.list", args=(self.kwargs["ex_slug"], self.kwargs["slug"]))


class DocumentReviewList(LoginRequiredMixin, ListView):
    template_name = "web/document_list.html"

    def get_context_data(self, **kwargs):
        context = super(DocumentReviewList, self).get_context_data(**kwargs)
        museum = Museum.objects.get(slug=self.kwargs.get("m_slug"))
        context["catalog"] = _get_catalog(
            museum.id, self.kwargs.get("ex_slug"), self.kwargs.get("slug")
        )
        context["review"] = True
        return context

    def get_queryset(self):
        return Document.objects.filter(
            catalog__exhibition__museum__slug=self.kwargs.get("m_slug"),
            catalog__exhibition__slug=self.kwargs.get("ex_slug"),
            catalog__slug=self.kwargs.get("slug")
        )


class MediaUpload(LoginRequiredMixin, AjaxResponseMixin, View):
    def post_ajax(self, request, slug):
        exhibition = _get_exhibition(request.user, slug)
        folder = exhibition.museum.slug + "/" + exhibition.slug
        uploader = AjaxFileUploader(backend=DefaultStorageUploadBackend, UPLOAD_DIR=folder)
        return uploader(request)


class MediaDelete(LoginRequiredMixin, AjaxResponseMixin, View):
    def delete_ajax(self, request, slug, id):
        media = get_object_or_404(Media, id=id)
        media.delete()

        context = {
            'exhibition': _get_exhibition(request.user, slug)
        }
        return render(request, 'web/_media_toolbar.html', context)


class MediaView(LoginRequiredMixin, AjaxResponseMixin, View):
    def get_ajax(self, request, slug):
        context = {
            'exhibition': _get_exhibition(request.user, slug)
        }
        return render(request, 'web/_media_toolbar.html', context)

    def post_ajax(self, request, slug):
        exhibition = _get_exhibition(request.user, slug)
        media_json = json.loads(request.body)

        media = Media(
            exhibition=exhibition,
            thumbnail=media_json['thumbnail'],
            name=media_json['name'],
            category=media_json['category'],
            local_file=False,
            external_url=media_json['external_url'])
        media.save()

        context = {
            'exhibition': exhibition
        }

        return render(request, 'web/_media_toolbar.html', context)
