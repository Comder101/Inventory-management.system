# Generated by Django 3.2.19 on 2023-05-11 19:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('adminl', '0014_remove_adminl_email_adminl_username_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='adminl',
            name='password',
            field=models.CharField(default='passw123', max_length=50),
        ),
        migrations.AlterField(
            model_name='adminl',
            name='username',
            field=models.CharField(default='adminp', max_length=50),
        ),
    ]
