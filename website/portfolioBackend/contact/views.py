from django.shortcuts import render
from . import urls
from django.contrib import messages
from django.http import HttpResponse
# Create your views here.


def landingPage(request):
    if request.user.is_authenticated:
        return render(request, 'contact/contact.html')
    return render(request, 'Backend/home.html')


