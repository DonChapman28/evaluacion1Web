# Generated by Django 4.2.1 on 2023-06-21 05:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_producto_imagen'),
    ]

    operations = [
        migrations.AlterField(
            model_name='producto',
            name='precioCosto',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='producto',
            name='precioVenta',
            field=models.IntegerField(),
        ),
    ]
