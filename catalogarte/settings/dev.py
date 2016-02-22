from .base import *

SECRET_KEY = 'DEV'

DEBUG = True

HOSTNAME = "http://localhost:8000"

ALLOWED_HOSTS = ["*"]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'catalogarte',
        'USER': 'postgres',
        'PASSWORD': 'postgres',
        'HOST': '127.0.0.1',
        'PORT': '5432',
    }
}

CACHES = {
    'default': {
        'BACKEND': 'django.core.cache.backends.db.DatabaseCache',
        'LOCATION': 'app_cache',
    }
}

ADMIN_EMAIL = "juan.pj@gmail.com"

EMAIL_BACKEND = 'django.core.mail.backends.console.EmailBackend'
