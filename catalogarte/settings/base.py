# -*- coding: utf-8 -*-

import os

BASE_DIR = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


INSTALLED_APPS = (
    'web',
    'suit',
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'sorl.thumbnail',
    'ckeditor',
    'bootstrap3',
    "ajaxuploader",
    'datetimewidget',
)

MIDDLEWARE_CLASSES = (
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
    'django.middleware.security.SecurityMiddleware',
)

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

ROOT_URLCONF = 'catalogarte.urls'

WSGI_APPLICATION = 'catalogarte.wsgi.application'

LANGUAGE_CODE = 'es'

TIME_ZONE = 'America/Mexico_City'

USE_I18N = True

USE_L10N = True

USE_TZ = True

STATIC_URL = '/static/'
STATIC_ROOT = os.path.join(BASE_DIR, 'static')
MEDIA_URL = '/media/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'media')

LOGIN_URL = "/login/"
LOGIN_REDIRECT_URL = '/admin'

CKEDITOR_CONFIGS = {
    'default': {
        'toolbar': [
            ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-',
             'RemoveFormat', '-', 'Link', 'Unlink', '-', 'Table', 'HorizontalRule'],
            ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-',
             'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock'],
            ['Styles', 'Format', 'Font', 'FontSize', 'TextColor', 'BGColor'],
        ],
        'height': 300,
        'width': 550,
        'skin': 'bootstrapck',
    }
}

BOOTSTRAP3 = {
    'theme_url': '/static/web/css/material.min.css',
    'css_url': '/static/web/css/bootstrap.min.css',
    'javascript_url': '/static/web/js/vendor/bootstrap.min.js',
}


SUIT_CONFIG = {
    'ADMIN_NAME': 'Administración CatalogArte',
    'HEADER_DATE_FORMAT': 'l, j F Y',
    'HEADER_TIME_FORMAT': 'H:i',

    'MENU_OPEN_FIRST_CHILD': False,
    'MENU': (
        {
            'app': 'auth',
            'label': 'Usuarios',
            'icon':'icon-lock',
            'models': ('user')
        },
        {
            'app': 'web',
            'label': 'CatalogArte',
            'icon': 'icon-picture',
        },
    ),
}