# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_auto_20151106_1418'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='media',
            name='embed_code',
        ),
        migrations.AddField(
            model_name='media',
            name='thumbnail',
            field=models.URLField(max_length=255, blank=True),
        ),
        migrations.AlterField(
            model_name='media',
            name='media_file',
            field=models.FileField(upload_to=web.models.get_exhibition_file_path, verbose_name=b'Archivo', blank=True),
        ),
    ]
