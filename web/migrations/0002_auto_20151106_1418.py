# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='media',
            name='thumbnail',
        ),
        migrations.RemoveField(
            model_name='media',
            name='url',
        ),
        migrations.AddField(
            model_name='media',
            name='external_url',
            field=models.TextField(verbose_name=b'Url externa', blank=True),
        ),
        migrations.AddField(
            model_name='media',
            name='media_file',
            field=models.FileField(default='', upload_to=web.models.get_exhibition_file_path, verbose_name=b'Archivo'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='media',
            name='embed_code',
            field=models.TextField(verbose_name=b'C\xc3\xb3digo Html', blank=True),
        ),
    ]
