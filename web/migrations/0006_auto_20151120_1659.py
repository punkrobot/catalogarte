# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import autoslug.fields


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0005_auto_20151120_1551'),
    ]

    operations = [
        migrations.AlterField(
            model_name='catalog',
            name='slug',
            field=autoslug.fields.AutoSlugField(populate_from=b'title', unique_with=(b'exhibition',), editable=False),
        ),
        migrations.AlterField(
            model_name='exhibition',
            name='slug',
            field=autoslug.fields.AutoSlugField(populate_from=b'title', unique_with=(b'museum',), editable=False),
        ),
    ]
