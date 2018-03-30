from django.db import models

# Create your models here.

class book(models.Model):
    activity = models.CharField(max_length=50)
    Uptime = models.TimeField()
    Uptitle =  models.CharField(max_length=255)

    title = models.CharField(max_length=50)
    content = models.CharField(max_length=20000)



