# -*- coding: utf-8 -*-

from django.conf.urls import url

from . import views

urlpatterns = [

    # Auth url's

    url(r'^login/$',
        'django.contrib.auth.views.login', {'template_name': 'web/login.html'}),

    url(r'^logout$',
        'django.contrib.auth.views.logout', {'next_page': '/admin'}),

    # Admin url's

    url(r'^admin$',
        views.ExhibitionAdmin.as_view(), name='exhibition.admin'),

    url(r'^admin/perfil$',
        views.MuseumUpdate.as_view(), name='museum.update'),

    url(r'^admin/nueva$',
        views.ExhibitionCreate.as_view(), name='exhibition.create'),

    url(r'^admin/(?P<slug>[\w-]+)/actualizar$',
        views.ExhibitionUpdate.as_view(), name='exhibition.update'),

    # Catalog url's

    url(r'^admin/(?P<slug>[\w-]+)/catalogo$',
        views.CatalogCreate.as_view(), name='catalog.create'),

    url(r'^admin/(?P<ex_slug>[\w-]+)/(?P<slug>[\w-]+)/editar$',
        views.CatalogEditor.as_view(), name='catalog.editor'),

    url(r'^admin/(?P<ex_slug>[\w-]+)/(?P<slug>[\w-]+)/vista_previa$',
        views.CatalogPreview.as_view(), name='catalog.preview'),

    url(r'^admin/(?P<ex_slug>[\w-]+)/(?P<slug>[\w-]+)/exportar$',
        views.CatalogExport.as_view(), name='catalog.export'),

    url(r'^admin/(?P<ex_slug>[\w-]+)/(?P<slug>[\w-]+)/publicar$',
        views.CatalogPublish.as_view(), name='catalog.publish'),

    url(r'^admin/(?P<ex_slug>[\w-]+)/(?P<slug>[\w-]+)/$',
        views.CatalogView.as_view(), name='catalog.view'),

    url(r'^(?P<m_slug>[\w-]+)/(?P<ex_slug>[\w-]+)/(?P<slug>[\w-]+)/review$',
        views.CatalogReview.as_view(), name='catalog.review'),

    # Media url's

    url(r'^admin/(?P<slug>[\w-]+)/media$',
        views.MediaView.as_view(), name='media.view'),

    url(r'^admin/(?P<slug>[\w-]+)/media/upload$',
        views.MediaUpload.as_view(), name='media.upload'),

    url(r'^admin/(?P<slug>[\w-]+)/media/delete/(?P<id>[0-9]+)$',
        views.MediaDelete.as_view(), name='media.delete'),

    # Public url's

    url(r'^$',
        views.ExhibitionList.as_view(), name='index'),

    url(r'^search/$',
        views.ExhibitionSearch.as_view(), name='search'),

    url(r'^(?P<slug>[\w-]+)/$',
        views.MuseumDetail.as_view(), name='museum.detail'),

    url(r'^(?P<m_slug>[\w-]+)/(?P<slug>[\w-]+)/$',
        views.ExhibitionDetail.as_view(), name='exhibition.detail'),

    url(r'^(?P<m_slug>[\w-]+)/(?P<ex_slug>[\w-]+)/(?P<slug>[\w-]+)/$',
        views.CatalogDetail.as_view(), name='catalog.detail'),

    url(r'^(?P<m_slug>[\w-]+)/(?P<ex_slug>[\w-]+)/(?P<slug>[\w-]+)/pdf$',
        views.CatalogPrint.as_view(), name='catalog.print'),

]
