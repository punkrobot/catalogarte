# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0006_auto_20151120_1659'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='exhibition',
            options={'verbose_name': 'Exhibici\xf3n', 'verbose_name_plural': 'Exhibiciones'},
        ),
        migrations.AddField(
            model_name='catalog',
            name='pdf_available',
            field=models.BooleanField(default=False, verbose_name=b'Generar PDF'),
        ),
    ]
