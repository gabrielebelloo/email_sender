from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from .models import Email
from .serializers import EmailSerializer
from django.core.mail import EmailMessage
from django.conf import settings
from rest_framework.permissions import AllowAny

class EmailView(generics.ListCreateAPIView):
  queryset = Email.objects.all()
  serializer_class = EmailSerializer

  def post(self, request):
    serializer = EmailSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()

      recipient = serializer.validated_data['recipient']
      subject = serializer.validated_data['subject']
      body = serializer.validated_data['body']

      mail = EmailMessage(
        subject,
        body,
        settings.EMAIL_HOST_USER, 
        [recipient]
      )

      try:
        attachment = serializer.validated_data['attachment']
      except:
        print('No attachment')
      else:
        attachment_name = replace_chars(attachment.name, ' ()')
        attachment_path = settings.FILE_PATH_FIELD_DIRECTORY + attachment_name
        mail.attach_file(attachment_path)
      finally:
        mail.send()
    
      return Response('Email sent successfully', status=200)
    else:
      print(serializer.errors)
      return Response(serializer.errors, status=400)
    

class EmailDelete(generics.DestroyAPIView):
  queryset = Email.objects.all()
  serializer_class = EmailSerializer


def replace_chars(text, chars):
  for c in chars:
    if c == ' ':
      text = text.replace(c, '_')
    else:
      text = text.replace(c, '')
  return text