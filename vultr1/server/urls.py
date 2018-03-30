from django.conf.urls import url

from server import views

urlpatterns = [
    url(r'^vultr/?$', views.vultr,name='vultr_index'),
    url(r'^vultr/activity/?$', views.activity,name='vultr_activity'),
    url(r'^vultr/course/?$', views.vultr_course, name='vultr_course'),
    url(r'^vultr/buy/?$', views.vultr_buy, name='vultr_buy'),
    url(r'^vultr/ssh/?$', views.vultr_ssh, name='vultr_ssh'),
    url(r'^vultr/issue/?$', views.vultr_issue, name='vultr_issue'),



]