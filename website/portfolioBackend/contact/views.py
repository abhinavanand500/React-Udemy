from django.shortcuts import render
from . import urls
from django.http import HttpResponse
# Create your views here.


def landingPage(request):
    return HttpResponse("Hi All")
