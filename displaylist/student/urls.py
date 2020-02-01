from django.urls import path, include
from .views import *

urlpatterns = [
    path('students/', api_student_details_list_view, name='student_list'),
    path('students/create/', StudentCreateList.as_view(), name='student_details_creation'),
    path('students/delete/<int:pk>/', api_student_delete_detail_view, name='student_details_deletion'),
    path('students/update/<int:pk>/', api_student_update_detail_view, name='student_details_update'),
    ]