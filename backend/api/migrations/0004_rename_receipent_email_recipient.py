# Generated by Django 5.0.6 on 2024-05-25 15:02

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_email_receipent'),
    ]

    operations = [
        migrations.RenameField(
            model_name='email',
            old_name='receipent',
            new_name='recipient',
        ),
    ]