# -*- coding: utf-8 -*-

from django import forms

from ckeditor.widgets import CKEditorWidget
from datetimewidget.widgets import DateTimeWidget

from .models import Exhibition, Catalog, Museum, Document


class MuseumForm(forms.ModelForm):
    class Meta:
        model = Museum
        fields = ["address", "details", "website", "twitter", "facebook", "instagram", "youtube",
                  "issuu_username", "issuu_api_key", "issuu_api_secret", "administrator_name",
                  "logo", "cover"]

    def __init__(self, *args, **kwargs):
        super(MuseumForm, self).__init__(*args, **kwargs)

        self.fields['address'].widget = CKEditorWidget()
        self.fields['details'].widget = CKEditorWidget()


class ExhibitionForm(forms.ModelForm):
    class Meta:
        model = Exhibition
        fields = ['title', 'subtitle', 'start_date', 'end_date', 'description', 'credits',
                  'information', 'activities', 'website', 'hashtag', 'cover', "cover_alt",
                  'category', 'tags']

    def __init__(self, *args, **kwargs):
        super(ExhibitionForm, self).__init__(*args, **kwargs)

        self.fields['title'].widget.attrs = {'placeholder': 'Título'}
        self.fields['subtitle'].widget.attrs = {'placeholder': 'Subtitulo'}
        self.fields['start_date'].widget = DateTimeWidget(usel10n=True, bootstrap_version=3)
        self.fields['end_date'].widget = DateTimeWidget(usel10n=True, bootstrap_version=3)
        self.fields['description'].widget.attrs = {
            'placeholder': 'Descripción corta de la exposición...', 'rows': 4
        }
        self.fields['credits'].widget = CKEditorWidget()
        self.fields['credits'].initial = '<h3>Curaduría</h3><ul><li></li></ul>'
        self.fields['information'].widget = CKEditorWidget()
        self.fields['information'].initial = \
            '<h3>Horarios</h3><ul><li></li></ul><hr><h3>Precios</h3><ul><li></li></ul>'
        self.fields['activities'].widget = CKEditorWidget()
        self.fields['activities'].initial = \
            '<h3>Actividades</h3><ul><li></li></ul><hr><h3>Talleres</h3><ul><li></li></ul>'
        self.fields['hashtag'].widget.attrs = {'placeholder': '#HastagDeLaExposicion'}


class CatalogForm(forms.ModelForm):
    class Meta:
        model = Catalog
        fields = ['title', 'width', 'height']


class DocumentForm(forms.ModelForm):
    class Meta:
        model = Document
        fields = ['name', 'file']
