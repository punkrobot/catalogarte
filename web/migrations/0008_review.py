# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import migrations, models
import django.utils.timezone
from django.conf import settings
import model_utils.fields


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('web', '0007_auto_20151129_1206'),
    ]

    operations = [
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, verbose_name='created', editable=False)),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, verbose_name='modified', editable=False)),
                ('approved', models.NullBooleanField(default=None, verbose_name=b'Aprobado')),
                ('comments', models.TextField(verbose_name=b'Comentarios', blank=True)),
                ('catalog', models.ForeignKey(verbose_name=b'Cat\xc3\xa1logo', to='web.Catalog')),
                ('reviewer', models.ForeignKey(verbose_name=b'Revisor', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'verbose_name': 'Revisi\xf3n',
            },
        ),
    ]
