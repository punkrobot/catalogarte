# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0003_auto_20151114_2015'),
    ]

    operations = [
        migrations.AddField(
            model_name='media',
            name='local_file',
            field=models.BooleanField(default=True),
        ),
    ]
