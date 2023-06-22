from django.shortcuts import render, redirect, get_object_or_404
from .models import Producto,Cliente,Marca,Categoria
from .forms import ClienteForm,ProductoForm,MarcaForm,CategoriaForm,CustomUserCreationForm
from django.contrib import messages
from django.core.paginator import Paginator
from django.http import Http404
from django.contrib.auth import authenticate, login
from django.shortcuts import get_object_or_404
from django.http import JsonResponse
# Create your views here.

def home(request):
    productos = Producto.objects.all()
    data = {
        'productos': productos
    }
    return render(request, 'home.html', data)

def galeria(request):
    productos = Producto.objects.all()
    data = {
        'productos': productos
    }
    return render(request, 'galeria.html', data)


#FORMULARIOS
def cliente(request):
    data = {
        'form': ClienteForm()
    }

    if request.method == 'POST':
        formulario = ClienteForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Datos guardados"
        else:   
            data["form"] = formulario

    return render(request, 'cliente.html', data)

def productos(request):   
    data = {
        'form': ProductoForm()
    }

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Datos guardados"
        else:   
            data["form"] = formulario
    return render(request, 'productos.html', data)

def marca(request):
    data = {
        'form': MarcaForm()
    }

    if request.method == 'POST':
        formulario = MarcaForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Datos guardados"
        else:   
            data["form"] = formulario
    return render(request, 'marca.html', data)

def categoria(request):
    data = {
        'form': CategoriaForm()
    }

    if request.method == 'POST':
        formulario = CategoriaForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Datos guardados"
        else:   
            data["form"] = formulario
    return render(request, 'categoria.html', data)

#LISTAR

def listar_productos(request):
    productos = Producto.objects.all()
    data = {
            'productos': productos
    }
    return render(request, 'listas/listar_productos.html', data)

def listar_marcas(request):
    marcas = Marca.objects.all()
    data = {
            'marcas': marcas
    }
    return render(request, 'listas/listar_marcas.html', data)

def listar_categorias(request):
    categorias = Categoria.objects.all()
    data = {
            'categorias': categorias
    }
    return render(request, 'listas/listar_categorias.html', data)

#PRODUCTOS
def editar_productos(request, id):

    producto = get_object_or_404(Producto, id=id)

    data = {
        'form': ProductoForm(instance=producto)
    }

    if request.method == 'POST':
        formulario = ProductoForm(data=request.POST, instance=producto, files=request.FILES)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Datos modificados"
            return redirect('listar_productos')
        else:   
            data["form"] = formulario

    return render(request, 'listas/editar_productos.html',data)

def eliminar_productos(request, id):
    producto = get_object_or_404(Producto, id=id)
    producto.delete()
    return redirect('listar_productos')

#MARCAS
def editar_marcas(request, id):

    producto = get_object_or_404(Marca, id=id)

    data = {
        'form': MarcaForm(instance=producto)
    }

    if request.method == 'POST':
        formulario = MarcaForm(data=request.POST, instance=producto)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Datos modificados"
            return redirect('listar_marcas')
        else:   
            data["form"] = formulario

    return render(request, 'listas/editar_marcas.html',data)

def eliminar_marcas(request, id):
    marca = get_object_or_404(Marca, id=id)
    marca.delete()
    return redirect('listar_marcas')

#CATEGORIAS
def editar_categorias(request, id):

    producto = get_object_or_404(Categoria, id=id)

    data = {
        'form': MarcaForm(instance=producto)
    }

    if request.method == 'POST':
        formulario = CategoriaForm(data=request.POST, instance=producto)
        if formulario.is_valid():
            formulario.save()
            data["mensaje"] = "Datos modificados"
            return redirect('listar_categorias')
        else:   
            data["form"] = formulario

    return render(request, 'listas/editar_categorias.html',data)

def eliminar_categorias(request, id):
    marca = get_object_or_404(Categoria, id=id)
    marca.delete()
    return redirect('listar_categorias')

def registro(request):
    data = {
        'form': CustomUserCreationForm()
    }

    if request.method == 'POST':
        formulario = CustomUserCreationForm(data=request.POST)
        if formulario.is_valid():
            formulario.save()
            user = authenticate(username=formulario.cleanes_data["username"], password=formulario.cleanes_data["password1"])
            login(request, user)
            return redirect('home')
        

    return render(request,'registration/registro.html',data)

from django.shortcuts import get_object_or_404
from django.http import JsonResponse

def agregar_al_carrito(request, producto_id):
    producto = get_object_or_404(Producto, id=producto_id)

    carrito = request.session.get('carrito', {})
    if producto_id in carrito:
        carrito[producto_id]['cantidad'] += 1
    else:
        carrito[producto_id] = {
            'id': producto.id,
            'nombre': producto.nombre,
            'marca': producto.marca.nombre,
            'precioVenta': producto.precioVenta,
            'cantidad': 1
        }

    request.session['carrito'] = carrito

    return JsonResponse({'message': 'Producto agregado al carrito'})




    