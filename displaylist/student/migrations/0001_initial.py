# Generated by Django 3.0 on 2019-12-04 09:01

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstName', models.CharField(max_length=250)),
                ('lastName', models.CharField(max_length=250)),
                ('skills', models.CharField(max_length=250)),
            ],
        ),
    ]
