from django.urls import path
from . import views

urlpatterns = [
  path('', views.EmailView.as_view())
]