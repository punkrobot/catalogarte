# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0009_catalog_qr_code'),
    ]

    operations = [
        migrations.AddField(
            model_name='museum',
            name='administrator_name',
            field=models.TextField(default='', max_length=100, verbose_name=b'Nombre del responsable'),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='catalog',
            name='qr_code',
            field=models.ImageField(upload_to=web.models.get_catalog_file_path, verbose_name=b'C\xc3\xb3digo QR', blank=True),
        ),
    ]
