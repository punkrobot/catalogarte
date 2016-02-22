# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0010_auto_20151209_1110'),
    ]

    operations = [
        migrations.AlterField(
            model_name='media',
            name='media_file',
            field=models.FileField(upload_to=web.models.get_exhibition_file_path, max_length=255, verbose_name=b'Archivo', blank=True),
        ),
    ]
