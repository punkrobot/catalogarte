# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2017-02-13 01:34
from __future__ import unicode_literals

import autoslug.fields
from django.db import migrations, models
import django.db.models.deletion
import web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0013_auto_20160314_1335'),
    ]

    operations = [
        migrations.CreateModel(
            name='Document',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50, verbose_name=b'Nombre')),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from=b'name')),
                ('file', models.FileField(max_length=255, upload_to=web.models.get_catalog_file_path, verbose_name=b'Archivo')),
                ('catalog', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='web.Catalog', verbose_name=b'Cat\xc3\xa1logo')),
            ],
            options={
                'verbose_name': 'Documento',
            },
        ),
        migrations.AlterField(
            model_name='exhibition',
            name='cover_alt',
            field=models.ImageField(blank=True, help_text=b'Tama\xc3\xb1o recomendado 280x250', null=True, upload_to=web.models.get_exhibition_file_path, verbose_name=b'Portada miniatura'),
        ),
        migrations.AlterField(
            model_name='exhibition',
            name='tags',
            field=models.ManyToManyField(help_text=b'Mantenga presionado Control o Command en una Mac para seleccionar m\xc3\xa1s de una opci\xc3\xb3n.', to='web.Tag', verbose_name=b'Etiquetas'),
        ),
    ]