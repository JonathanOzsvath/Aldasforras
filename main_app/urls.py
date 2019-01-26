from django.conf.urls import url

from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^donate/$', views.donate, name='donate'),
    url(r'^contact/$', views.contact, name='contact'),
]
