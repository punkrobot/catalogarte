# -*- coding: utf-8 -*-

from django import forms
from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from django.contrib.auth.models import User

from ckeditor.widgets import CKEditorWidget

from . import models


class MuseumAdminForm(forms.ModelForm):
    address = forms.CharField(widget=CKEditorWidget())
    details = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = models.Museum
        exclude = ['']


class MuseumInline(admin.StackedInline):
    form = MuseumAdminForm
    model = models.Museum
    can_delete = False


class MuseumAdmin(UserAdmin):
    inlines = (MuseumInline, )


class ExhibitionAdminForm(forms.ModelForm):
    credits = forms.CharField(widget=CKEditorWidget())
    information = forms.CharField(widget=CKEditorWidget())
    description = forms.CharField(widget=CKEditorWidget())
    activities = forms.CharField(widget=CKEditorWidget())

    class Meta:
        model = models.Exhibition
        fields = "__all__"


class ExhibitionAdmin(admin.ModelAdmin):
    form = ExhibitionAdminForm
    list_display = ("title", "category", "museum")


class CatalogAdmin(admin.ModelAdmin):
    list_display = ("title", "exhibition", "modified_date", "status")


admin.site.unregister(User)
admin.site.register(User, MuseumAdmin)
admin.site.register(models.Exhibition, ExhibitionAdmin)
admin.site.register(models.Catalog, CatalogAdmin)
admin.site.register(models.Media)
admin.site.register(models.Category)
admin.site.register(models.Tag)
