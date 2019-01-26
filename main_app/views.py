from django.shortcuts import render


# Create your views here.
def home(request):
    return render(request, 'aboutus.html')


def donate(request):
    return render(request, 'donate.html')


def contact(request):
    return render(request, 'contact.html')
