from django.shortcuts import render


# Create your views here.
from Aldasforras import settings


def home(request):
    basedir = settings.BASE_DIR
    return render(request, 'aboutus.html', {'basedir': basedir})


def donate(request):
    return render(request, 'donate.html')


def contact(request):
    return render(request, 'contact.html')
