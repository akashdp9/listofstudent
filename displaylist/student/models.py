from django.db import models


class Student(models.Model):
    firstName = models.CharField(max_length=250)
    lastName = models.CharField(max_length=250)
    skills = models.CharField(max_length=250)

    def __str__(self):
        return self.firstName

    def skills_list(self):
        return list(str(self.skills).split(','))
