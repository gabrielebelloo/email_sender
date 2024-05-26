from django.urls import path
from . import views

urlpatterns = [
  path('', views.EmailView.as_view(), name='email-list'),
  path('delete/<int:pk>/', views.EmailDelete.as_view(), name='email-delete')
]