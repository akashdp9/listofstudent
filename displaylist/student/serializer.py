from rest_framework import serializers
from .models import Student


class StudentSerializers(serializers.ModelSerializer):
    skills = serializers.ListField(source='skills_list')

    class Meta:
        model = Student
        fields = ('id', 'firstName', 'lastName', 'skills',)


class StudentCreateSerializers(serializers.ModelSerializer):


    class Meta:
        model = Student
        fields = ( 'firstName', 'lastName', 'skills',)
