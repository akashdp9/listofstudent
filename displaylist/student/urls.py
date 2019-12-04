from django.urls import path, include
from .views import *

urlpatterns = [
    path('students/', api_student_details_list_view, name='student_list'),
    path('students/create/', StudentCreateList.as_view(), name='student_details_creation'),
    ]