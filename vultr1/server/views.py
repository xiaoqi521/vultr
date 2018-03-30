from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def vultr(request):
    return render(request,'vultr.html',)


def activity(request):
    return render(request, 'activity.html')

def vultr_course(request):
    return render(request, 'course.html', )

def vultr_buy(request):
    return render(request,'buy.html',)

def vultr_ssh(request):
    return render(request,'ssh.html',)

# def vultr_bbr(request):
#     return render(request,'bbr.html',)

def vultr_issue(request):
    return render(request,'issue.html',)
