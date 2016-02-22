# -*- coding: utf-8 -*-

import hashlib
from subprocess import Popen, PIPE, STDOUT

from django.core.urlresolvers import reverse
from django.conf import settings

import requests


def export_pdf(catalog):
    address = settings.HOSTNAME + reverse(
        "catalog.print", args=[catalog.exhibition.museum.slug, catalog.exhibition.slug,
                               catalog.slug]
    )
    filename = catalog.get_pdf_filename()

    external_process = Popen(
        ["phantomjs", "phantom.js", address, filename, str(catalog.width), str(catalog.height)],
        stdout=PIPE, stderr=STDOUT
    )
    external_process.communicate()


def upload_to_issuu(api_key, api_secret, catalog):
    url = settings.HOSTNAME + "/" + catalog.get_pdf_filename()

    data = {
        "action": "issuu.document.url_upload",
        "apiKey": api_key,
        "slurpUrl": url,
        "name": catalog.slug,
        "title": catalog.title,
        "format": "json",
        "access": "private",
        "downloadable": "false",
        "commentsAllowed": "false"
    }

    signature = api_secret

    for key in sorted(data.keys()):
        signature += key + data[key]

    data['signature'] = hashlib.md5(signature.encode('utf-8')).hexdigest()

    response = requests.get("http://api.issuu.com/1_0", params=data).json()

    return response["rsp"]["stat"] == "ok"
