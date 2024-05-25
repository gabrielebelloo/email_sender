from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import generics
from .models import Email
from .serializers import EmailSerializer
from django.core.mail import send_mail
from django.conf import settings


class EmailView(generics.ListCreateAPIView):
  queryset = Email.objects.all()
  serializer_class = EmailSerializer

  def post(self, request):
    serializer = EmailSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      receipent = serializer.validated_data['recipient']
      subject = serializer.validated_data['subject']
      body = serializer.validated_data['body']
      send_mail(
        subject,
        body,
        settings.EMAIL_HOST_USER, 
        [receipent],
        fail_silently=False
      )
      return Response('Email sent successfully', status=200)
    else:
      print(serializer.errors)
      return Response(serializer.errors, status=400)



    