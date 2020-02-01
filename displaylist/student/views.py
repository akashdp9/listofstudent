from django.shortcuts import render

from rest_framework import viewsets
from .serializer import *
from .models import Student
from rest_framework import status
from rest_framework.response import Response
from rest_framework import generics
from rest_framework.decorators import api_view
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView


class StudentView(viewsets.ModelViewSet):
    serializer_class = StudentSerializers
    queryset = Student.objects.all()


@api_view(['GET'])
def api_student_details_list_view(request):
    student = Student.objects.all()
    if request.method == 'GET':
        serializer = StudentSerializers(student, many=True)
    return Response(serializer.data)


class StudentCreateList(CreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentCreateSerializers
# @api_view(['POST'])
# def api_student_create_detail_view(request):
#     data = {}
#     if request.method == 'POST':
#         serializer = StudentCreateSerializers(data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             data['Success'] = 'Post operation Completed Successful'
#             return Response(data=data)
#         return Response(serializer.errors,status.HTTP_404_NOT_FOUND)

@api_view(['PUT'])
def api_student_update_detail_view(request, pk):
    try:
        student = Student.objects.get(id=pk)
    except Student.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = StudentSerializers(student, data=request.data)
        if serializer.is_valid():
            serializer.save()
            data = {}
            data['Success'] = "Update Successful"
            return Response(serializer.data)
        return Response(status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
def api_student_delete_detail_view(request, pk):
    try:
        student = Student.objects.get(id=pk)
    except Student.DoesNotExists:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        operation = student.delete()
        data = {}
        if operation:
            data['Success'] = "Deleted Successfully"
        else:
            data['Failure'] = "Delete Failed"
        return Response(data, status=status.HTTP_200_OK)
 