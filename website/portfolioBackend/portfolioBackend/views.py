from django.shortcuts import render
from . import urls
from django.http import HttpResponse
# Create your views here.


def home(request):
    return HttpResponse("Hi Home")
