# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import web.models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0008_review'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalog',
            name='qr_code',
            field=models.ImageField(upload_to=web.models.get_exhibition_file_path, verbose_name=b'C\xc3\xb3digo QR', blank=True),
        ),
    ]
