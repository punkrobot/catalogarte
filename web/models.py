# -*- coding: utf-8 -*-

from django.conf import settings
from django.core.files.base import ContentFile
from django.core.mail import send_mail
from django.db import models
from django.contrib.auth.models import User, Group
from django.core.urlresolvers import reverse
from django.dispatch import receiver
from django.utils.encoding import python_2_unicode_compatible

from ajaxuploader.signals import file_uploaded
from ajaxuploader.views import AjaxFileUploader
from autoslug import AutoSlugField
from jsonfield import JSONField
from model_utils import Choices
from model_utils.models import TimeStampedModel, StatusModel
import qrcode
from StringIO import StringIO

from web.services import upload_to_issuu, export_pdf


def get_museo_file_path(instance, filename):
    return "/".join([instance.slug, filename])


def get_exhibition_file_path(instance, filename):
    return "/".join([instance.museum.slug, instance.slug, filename])


def get_catalog_file_path(instance, filename):
    return "/".join([instance.exhibition.museum.slug, instance.exhibition.slug, filename])


@python_2_unicode_compatible
class Museum(models.Model):
    user = models.OneToOneField(User, verbose_name="Usuario")

    name = models.CharField("Nombre", max_length=100)
    slug = AutoSlugField(unique=True, populate_from='name')
    address = models.TextField("Dirección")
    details = models.TextField("Detalles", blank=True)

    website = models.URLField("Sitio web", max_length=255, blank=True)
    twitter = models.URLField(max_length=255, blank=True)
    facebook = models.URLField(max_length=255, blank=True)
    youtube = models.URLField(max_length=255, blank=True)
    instagram = models.URLField(max_length=255, blank=True)

    issuu_username = models.CharField("Usuario ISSUU", max_length=64, blank=True)
    issuu_api_key = models.CharField("API KEY ISSUU", max_length=256, blank=True)
    issuu_api_secret = models.CharField("API SECRET ISSUU", max_length=256, blank=True)

    administrator_name = models.TextField("Nombre del responsable", max_length=100)
    logo = models.ImageField("Logotipo", upload_to=get_museo_file_path)
    cover = models.ImageField("Portada", upload_to=get_museo_file_path, blank=True)

    class Meta:
        verbose_name = "Museo"

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Exhibition(TimeStampedModel):
    museum = models.ForeignKey(Museum, verbose_name="Museo")

    title = models.CharField("Título", max_length=100)
    subtitle = models.CharField("Subtítulo", max_length=100, blank=True)
    credits = models.TextField("Créditos", blank=True)
    description = models.TextField("Descripción", blank=True)
    information = models.TextField("Información", blank=True)
    activities = models.TextField("Actividades", blank=True)
    website = models.URLField("Sitio web", max_length=255, blank=True)
    hashtag = models.CharField(max_length=255, blank=True)

    slug = AutoSlugField(unique_with="museum", populate_from="title")
    start_date = models.DateTimeField("Fecha inicial", null=True, blank=True)
    end_date = models.DateTimeField("Fecha final", null=True, blank=True)
    category = models.ForeignKey("Category", verbose_name="Categoría")
    tags = models.ManyToManyField("Tag", verbose_name="Etiquetas")
    cover = models.ImageField("Portada", help_text="Tamaño recomendado 1900x600",
                              upload_to=get_exhibition_file_path)
    cover_alt = models.ImageField("Portada alterna", help_text="Tamaño recomendado 280x250",
                                  upload_to=get_exhibition_file_path, null=True, blank=True)

    class Meta:
        verbose_name = "Exhibición"
        verbose_name_plural = "Exhibiciones"

    def get_tags(self):
        tags_list = self.tags.values_list("name", flat=True)
        return ", ".join(tags_list)

    def get_tags_slugs(self):
        tags_list = self.tags.values_list("slug", flat=True)
        return " ".join(tags_list)

    def get_images(self):
        return self.media_set.filter(category=Media.IMAGE)

    def get_videos(self):
        return self.media_set.filter(category=Media.VIDEO)

    def get_audios(self):
        return self.media_set.filter(category=Media.AUDIO)

    def __str__(self):
        return self.title


class Catalog(StatusModel):
    STATUS = Choices("created", "review", "rejected", "published")

    exhibition = models.ForeignKey(Exhibition)

    title = models.CharField("Título", max_length=100)
    slug = AutoSlugField(unique_with="exhibition", populate_from="title")
    height = models.PositiveIntegerField("Alto", default=600, null=True, blank=True)
    width = models.PositiveIntegerField("Ancho", default=800, null=True, blank=True)
    pages = models.PositiveIntegerField("Páginas", null=True, blank=True)

    created_date = models.DateTimeField("Fecha de creación", auto_now_add=True)
    modified_date = models.DateTimeField("Fecha de modificación", auto_now=True)
    published_date = models.DateTimeField("Fecha de publicación", null=True, blank=True)

    pdf_available = models.BooleanField("Generar PDF", default=False)
    issuu_url = models.URLField("Catálogo ISSUU", blank=True)
    qr_code = models.ImageField("Código QR", blank=True, upload_to=get_catalog_file_path)

    content = JSONField("Contenido", blank=True)

    class Meta:
        verbose_name = "Catálogo"

    def get_absolute_url(self):
        return reverse('catalog.editor', args=[self.exhibition.slug, self.slug])

    def get_review_url(self):
        return settings.HOSTNAME + reverse(
            "catalog.review", args=[self.exhibition.museum.slug, self.exhibition.slug, self.slug]
        )

    def get_published_url(self):
        return settings.HOSTNAME + reverse(
            "catalog.detail", args=[self.exhibition.museum.slug, self.exhibition.slug, self.slug]
        )

    def get_pdf_filename(self):
        return "media/{}/{}/{}.pdf".format(
            self.exhibition.museum.slug, self.exhibition.slug, self.slug
        )

    def set_issuu_url(self):
        self.issuu_url = "http://issuu.com/{}/docs/{}".format(
            self.exhibition.museum.issuu_username, self.slug
        )

    def publish_to_issuu(self):
        api_key = self.exhibition.museum.issuu_api_key
        api_secret = self.exhibition.museum.issuu_api_secret

        if api_key != "" and api_secret != "":
            upload_to_issuu(api_key, api_secret, self)

    def generate_qr_code(self):
        image = qrcode.make(self.get_published_url())

        image_io = StringIO()
        image.save(image_io, "PNG")
        image_file = ContentFile(image_io.getvalue())

        self.qr_code.save("qr_code.png", image_file, save=False)

    def save(self, *args, **kwargs):
        if self.status == self.STATUS.review:
            export_pdf(self)

            url = self.get_review_url()
            subject = u"[CatalogArte] Nuevo catálogo por revisar"
            message = u"El museo '{}' agregó un nuevo catálogo al sistema de la exhibición '{}'. " \
                      u"Acceda al siguiente enlace para revisarlo y publicarlo o en caso " \
                      u"de ser necesario sugerirle cambios:\n{}\n\n Responsable del museo: " \
                      u"{}".format(self.exhibition.museum.name, self.exhibition.title, url,
                                   self.exhibition.museum.administrator_name)

            review_group = Group.objects.get(name="revisor")
            reviewers = review_group.user_set.all()
            for reviewer in reviewers:
                send_mail(subject, message, settings.ADMIN_EMAIL, [reviewer.email],
                          fail_silently=True)
                Review.objects.filter(reviewer=reviewer, catalog__slug=self.slug).delete()
                review = Review(reviewer=reviewer, catalog=self)
                review.save()

        elif self.status == self.STATUS.published:
            if self.issuu_url != "":
                self.publish_to_issuu()

            subject = u"[CatalogArte] Catálogo aprobado y publicado"
            message = u"El catálogo '{}' de la exhibición '{}' fue aprobado y publicado. " \
                      u"Acceda al siguiente enlace para consultarlo y difundirlo: \n " \
                      u"{}".format(self.title, self.exhibition.title, self.get_published_url())
            send_mail(subject, message, settings.ADMIN_EMAIL, [self.exhibition.museum.user.email],
                      fail_silently=True)

            self.generate_qr_code()

        super(Catalog, self).save(*args, **kwargs)


class Media(models.Model):
    IMAGE = "IMG"
    VIDEO = "VID"
    AUDIO = "AUD"
    CATEGORIES = ((IMAGE, "Imagen"), (VIDEO, "Video"), (AUDIO, "Audio"))

    name = models.CharField(max_length=100, blank=True)
    category = models.CharField(max_length=3, choices=CATEGORIES, default=IMAGE)
    exhibition = models.ForeignKey(Exhibition, verbose_name="Exhibición")

    local_file = models.BooleanField(default=True)
    external_url = models.TextField("Url externa", blank=True)
    thumbnail = models.URLField(max_length=255, blank=True)

    media_file = models.FileField(
            "Archivo", max_length=255, upload_to=get_exhibition_file_path, blank=True
    )

    class Meta:
        verbose_name = "Multimedia"
        verbose_name_plural = "Multimedia"


class Review(TimeStampedModel):
    reviewer = models.ForeignKey(User, verbose_name="Revisor")
    catalog = models.ForeignKey(Catalog, verbose_name="Catálogo")

    approved = models.NullBooleanField("Aprobado", blank=True, null=True, default=None)
    comments = models.TextField("Comentarios", blank=True)

    class Meta:
        verbose_name = "Revisión"

    def save(self, *args, **kwargs):
        if self.approved is not None and self.approved:
            if all(r.approved for r in self.catalog.review_set.exclude(id=self.id)):
                self.catalog.status = Catalog.STATUS.published
                self.catalog.save()

        elif self.approved is not None and not self.approved:
            self.catalog.status = Catalog.STATUS.rejected
            self.catalog.save()

            subject = u"[CatalogArte] Un catálogo necesita cambios para ser publicado"
            message = u"El catálogo '{}' de la exhibición '{}' necesita cambios antes de ser " \
                      u"publicado. Los comentarios del revisor son los siguientes: \n" \
                      u"{}\n\n" \
                      u"Acceda al siguiente enlace para editar el catálogo: \n " \
                      u"{}".format(self.catalog.title, self.catalog.exhibition.title, self.comments,
                                   settings.HOSTNAME+self.catalog.get_absolute_url())
            send_mail(subject, message, settings.ADMIN_EMAIL,
                      [self.catalog.exhibition.museum.user.email], fail_silently=True)

        super(Review, self).save(*args, **kwargs)


@python_2_unicode_compatible
class Category(models.Model):
    name = models.CharField("Nombre", max_length=50)
    slug = AutoSlugField(populate_from='name')
    color = models.CharField("Color", max_length=7, help_text="Hex Value", default="#000000")

    class Meta:
        verbose_name = "Categoría"

    def __str__(self):
        return self.name


@python_2_unicode_compatible
class Tag(models.Model):
    name = models.CharField("Nombre", max_length=50)
    slug = AutoSlugField(populate_from='name')

    class Meta:
        verbose_name = "Etiqueta"

    def __str__(self):
        return self.name


@receiver(file_uploaded, sender=AjaxFileUploader)
def on_upload(sender, backend, request, **kwargs):
    exhibition_id = request.GET["exhibition_id"]
    category = request.GET["category"]

    if category in ["VID", "AUD"]:
        thumbnail = Exhibition.objects.get(id=exhibition_id).cover.url
        title = request.GET["title"]
    else:
        thumbnail = ""
        title = ""

    Media.objects.create(
        exhibition_id=exhibition_id,
        name=title,
        category=category,
        local_file=True,
        media_file=backend.path,
        thumbnail=thumbnail
    )
