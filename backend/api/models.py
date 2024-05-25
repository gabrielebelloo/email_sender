from django.db import models
from django.conf import settings

class Email(models.Model):
  sender = models.CharField(max_length=200, default=settings.EMAIL_HOST_USER)
  recipient = models.CharField(max_length=200, default='')
  subject = models.CharField(max_length=200)
  body = models.TextField()
  date = models.DateTimeField(auto_now_add=True)