# Generated by Django 5.0.6 on 2024-05-25 16:25

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0004_rename_receipent_email_recipient'),
    ]

    operations = [
        migrations.AlterField(
            model_name='email',
            name='sender',
            field=models.CharField(default='bellogabriele2001@gmail.com', max_length=200),
        ),
    ]