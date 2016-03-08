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


admin.site.unregister(User)
admin.site.register(User, MuseumAdmin)
admin.site.register(models.Category)
admin.site.register(models.Tag)
