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


class ExhibitionAdminForm(forms.ModelForm):
    credits = forms.CharField(widget=CKEditorWidget(), label="Créditos", required=False)
    description = forms.CharField(widget=CKEditorWidget(), label="Descripción", required=False)
    information = forms.CharField(widget=CKEditorWidget(), label="Información", required=False)
    activities = forms.CharField(widget=CKEditorWidget(), label="Actividades", required=False)

    class Meta:
        model = models.Exhibition
        exclude = ['']


class ExhibitionAdmin(admin.ModelAdmin):
    form = ExhibitionAdminForm
    list_display = ('title', 'museum')


class MuseumInline(admin.StackedInline):
    form = MuseumAdminForm
    model = models.Museum
    can_delete = False


class MuseumAdmin(UserAdmin):
    inlines = (MuseumInline, )


admin.site.unregister(User)
admin.site.register(User, MuseumAdmin)
admin.site.register(models.Exhibition, ExhibitionAdmin)
admin.site.register(models.Category)
admin.site.register(models.Tag)
