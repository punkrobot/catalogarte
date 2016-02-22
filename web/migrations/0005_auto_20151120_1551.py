# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0004_media_local_file'),
    ]

    operations = [
        migrations.AddField(
            model_name='catalog',
            name='issuu_url',
            field=models.URLField(verbose_name=b'Cat\xc3\xa1logo ISSUU', blank=True),
        ),
        migrations.AddField(
            model_name='museum',
            name='issuu_api_key',
            field=models.CharField(max_length=256, verbose_name=b'API KEY ISSUU', blank=True),
        ),
        migrations.AddField(
            model_name='museum',
            name='issuu_api_secret',
            field=models.CharField(max_length=256, verbose_name=b'API SECRET ISSUU', blank=True),
        ),
        migrations.AddField(
            model_name='museum',
            name='issuu_username',
            field=models.CharField(max_length=64, verbose_name=b'Usuario ISSUU', blank=True),
        ),
        migrations.AlterField(
            model_name='catalog',
            name='height',
            field=models.PositiveIntegerField(default=600, null=True, verbose_name=b'Alto', blank=True),
        ),
        migrations.AlterField(
            model_name='catalog',
            name='width',
            field=models.PositiveIntegerField(default=800, null=True, verbose_name=b'Ancho', blank=True),
        ),
    ]
