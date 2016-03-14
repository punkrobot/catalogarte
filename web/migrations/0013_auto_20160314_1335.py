# -*- coding: utf-8 -*-
# Generated by Django 1.9.3 on 2016-03-14 19:35
from __future__ import unicode_literals

from django.db import migrations, models
import web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0012_auto_20160304_1156'),
    ]

    operations = [
        migrations.AddField(
            model_name='exhibition',
            name='cover_alt',
            field=models.ImageField(blank=True, help_text=b'Tama\xc3\xb1o recomendado 280x250', null=True, upload_to=web.models.get_exhibition_file_path, verbose_name=b'Portada alterna'),
        ),
        migrations.AlterField(
            model_name='exhibition',
            name='cover',
            field=models.ImageField(help_text=b'Tama\xc3\xb1o recomendado 1900x600', upload_to=web.models.get_exhibition_file_path, verbose_name=b'Portada'),
        ),
    ]