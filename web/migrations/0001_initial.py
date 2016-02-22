# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import autoslug.fields
import jsonfield.fields
import django.utils.timezone
from django.conf import settings
import model_utils.fields
import web.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Catalog',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('status', model_utils.fields.StatusField(default=b'created', max_length=100, verbose_name='status', no_check_for_status=True, choices=[(b'created', b'created'), (b'review', b'review'), (b'rejected', b'rejected'), (b'published', b'published')])),
                ('status_changed', model_utils.fields.MonitorField(default=django.utils.timezone.now, verbose_name='status changed', monitor='status')),
                ('title', models.CharField(max_length=100, verbose_name=b'T\xc3\xadtulo')),
                ('slug', autoslug.fields.AutoSlugField(populate_from=b'title', unique=True, editable=False)),
                ('height', models.PositiveIntegerField(null=True, verbose_name=b'Alto', blank=True)),
                ('width', models.PositiveIntegerField(null=True, verbose_name=b'Ancho', blank=True)),
                ('pages', models.PositiveIntegerField(null=True, verbose_name=b'P\xc3\xa1ginas', blank=True)),
                ('created_date', models.DateTimeField(auto_now_add=True, verbose_name=b'Fecha de creaci\xc3\xb3n')),
                ('modified_date', models.DateTimeField(auto_now=True, verbose_name=b'Fecha de modificaci\xc3\xb3n')),
                ('published_date', models.DateTimeField(null=True, verbose_name=b'Fecha de publicaci\xc3\xb3n', blank=True)),
                ('content', jsonfield.fields.JSONField(verbose_name=b'Contenido', blank=True)),
            ],
            options={
                'verbose_name': 'Cat\xe1logo',
            },
        ),
        migrations.CreateModel(
            name='Category',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50, verbose_name=b'Nombre')),
                ('slug', autoslug.fields.AutoSlugField(populate_from=b'name', editable=False)),
            ],
            options={
                'verbose_name': 'Categor\xeda',
            },
        ),
        migrations.CreateModel(
            name='Exhibition',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, verbose_name='created', editable=False)),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, verbose_name='modified', editable=False)),
                ('title', models.CharField(max_length=100, verbose_name=b'T\xc3\xadtulo')),
                ('subtitle', models.CharField(max_length=100, verbose_name=b'Subt\xc3\xadtulo', blank=True)),
                ('credits', models.TextField(verbose_name=b'Cr\xc3\xa9ditos', blank=True)),
                ('description', models.TextField(verbose_name=b'Descripci\xc3\xb3n', blank=True)),
                ('information', models.TextField(verbose_name=b'Informaci\xc3\xb3n', blank=True)),
                ('activities', models.TextField(verbose_name=b'Actividades', blank=True)),
                ('website', models.URLField(max_length=255, verbose_name=b'Sitio web', blank=True)),
                ('hashtag', models.CharField(max_length=255, blank=True)),
                ('slug', autoslug.fields.AutoSlugField(populate_from=b'title', unique=True, editable=False)),
                ('start_date', models.DateTimeField(null=True, verbose_name=b'Fecha inicial', blank=True)),
                ('end_date', models.DateTimeField(null=True, verbose_name=b'Fecha final', blank=True)),
                ('cover', models.ImageField(upload_to=web.models.get_exhibition_file_path, verbose_name=b'Portada')),
                ('category', models.ForeignKey(verbose_name=b'Categor\xc3\xada', to='web.Category')),
            ],
            options={
                'verbose_name': 'Exhibici\xf3n',
            },
        ),
        migrations.CreateModel(
            name='Media',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('url', models.TextField()),
                ('thumbnail', models.URLField(max_length=255, blank=True)),
                ('embed_code', models.TextField()),
                ('name', models.CharField(max_length=100, blank=True)),
                ('category', models.CharField(default=b'IMG', max_length=3, choices=[(b'IMG', b'Imagen'), (b'VID', b'Video'), (b'AUD', b'Audio')])),
                ('exhibition', models.ForeignKey(verbose_name=b'Exhibici\xc3\xb3n', to='web.Exhibition')),
            ],
            options={
                'verbose_name': 'Multimedia',
                'verbose_name_plural': 'Multimedia',
            },
        ),
        migrations.CreateModel(
            name='Museum',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=100, verbose_name=b'Nombre')),
                ('address', models.TextField(verbose_name=b'Direcci\xc3\xb3n')),
                ('details', models.TextField(verbose_name=b'Detalles', blank=True)),
                ('website', models.URLField(max_length=255, verbose_name=b'Sitio web', blank=True)),
                ('twitter', models.URLField(max_length=255, blank=True)),
                ('facebook', models.URLField(max_length=255, blank=True)),
                ('youtube', models.URLField(max_length=255, blank=True)),
                ('instagram', models.URLField(max_length=255, blank=True)),
                ('slug', autoslug.fields.AutoSlugField(populate_from=b'name', unique=True, editable=False)),
                ('logo', models.ImageField(upload_to=web.models.get_museo_file_path, verbose_name=b'Logotipo')),
                ('cover', models.ImageField(upload_to=web.models.get_museo_file_path, verbose_name=b'Portada', blank=True)),
                ('user', models.OneToOneField(verbose_name=b'Usuario', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Museo',
            },
        ),
        migrations.CreateModel(
            name='Tag',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('name', models.CharField(max_length=50, verbose_name=b'Nombre')),
                ('slug', autoslug.fields.AutoSlugField(populate_from=b'name', editable=False)),
            ],
            options={
                'verbose_name': 'Etiqueta',
            },
        ),
        migrations.AddField(
            model_name='exhibition',
            name='museum',
            field=models.ForeignKey(verbose_name=b'Museo', to='web.Museum'),
        ),
        migrations.AddField(
            model_name='exhibition',
            name='tags',
            field=models.ManyToManyField(to='web.Tag', verbose_name=b'Etiquetas'),
        ),
        migrations.AddField(
            model_name='catalog',
            name='exhibition',
            field=models.ForeignKey(to='web.Exhibition'),
        ),
    ]
