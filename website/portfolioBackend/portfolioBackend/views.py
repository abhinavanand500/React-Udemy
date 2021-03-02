from django.shortcuts import render, redirect
from . import urls
from django.contrib import messages
from django.http import HttpResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
# Create your views here.


def home(request):
    return render(request, 'Backend/home.html')

def handleLogin(request):
    if request.method == 'POST':
        loginusername = request.POST['username']
        loginpassword = request.POST['password']
        user = authenticate(username=loginusername, password=loginpassword)
        if user is not None:
            login(request, user)
            
            return HttpResponse("Helo login")
        else:
            messages.error(request, "Invalid Credentials. Please try again")
            return render(request, 'Backend/home.html')
    return render(request, 'Backend/home.html')
