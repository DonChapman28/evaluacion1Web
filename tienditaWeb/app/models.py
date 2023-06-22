from django.db import models

# Create your models here.
class Marca(models.Model):
    nombre = models.CharField(max_length=50)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre
    
class Categoria(models.Model):
    nombre = models.CharField(max_length=50)
    activo = models.BooleanField(default=True)

    def __str__(self):
        return self.nombre

class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    categoría = models.ForeignKey(Categoria, on_delete=models.PROTECT)
    marca = models.ForeignKey(Marca, on_delete=models.PROTECT)
    descripción = models.TextField()
    precioCosto = models.IntegerField()
    precioVenta = models.IntegerField()
    stock = models.IntegerField()
    imagen = models.ImageField(upload_to="productos", null=True)

    def __str__(self):
        return self.nombre

#datos para el cliente
opciones_region = [
    [0, "Región de Arica y Parinacota"],
    [1, "Región de Tarapacá"],
    [2, "Región de Antofagasta"],
    [3, "Región de Atacama"],
    [4, "Región de Coquimbo"],
    [5, "Región de Valparaíso"],
    [6, "Región Metropolitana"],
    [7, "Región de O'Higgins"],
    [8, "Región del Maule"],
    [9, "Región del Ñuble"],
    [10, "Región del Biobío"],
    [11, "Región de La Araucanía"],
    [12, "Región de Los Ríos"],
    [13, "Región de Los Lagos"],
    [14, "Región de Aysén"],
    [15, "Región de Magallanes"],
]

opciones_educacion = [
    [0, "Magister"],
    [1, "Doctor"],
    [2, "Profesional"],
    [3, "Otro"],
   
]

class Cliente(models.Model):
    rut = models.IntegerField(primary_key=True, unique=True, null=False, blank=False)
    dv = models.CharField(max_length=1, null=False, blank=False, default="")
    nombre = models.CharField(max_length=50)
    apellido = models.CharField(max_length=50)
    fechaNacimiento = models.DateField()
    email = models.EmailField()
    contrasena = models.CharField(max_length=50)
    region = models.IntegerField(choices=opciones_region)
    telefono = models.CharField(max_length=15)
    nivelEducacion = models.IntegerField(choices=opciones_educacion)

    def __str__(self):
        return self.nombre + " " + self.apellido
