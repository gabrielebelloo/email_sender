# Generated by Django 5.0.6 on 2024-05-26 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_email_attachment'),
    ]

    operations = [
        migrations.AlterField(
            model_name='email',
            name='attachment',
            field=models.FilePathField(path='files/', recursive=True),
        ),
    ]
