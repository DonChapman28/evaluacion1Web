from django.urls import path
from .views import home,productos,categoria,marca,cliente,listar_productos,listar_marcas,\
    listar_categorias,editar_productos,eliminar_productos,eliminar_marcas,editar_marcas,\
    editar_categorias,eliminar_categorias,galeria,registro  

urlpatterns = [
    path('', home, name="home"),
    path('productos', productos, name="productos"),
    path('categoria', categoria, name="categoria"),
    path('marca', marca, name="marca"),
    path('cliente', cliente, name="cliente"),
    path('galeria', galeria, name="galeria"),
    
    #modificar productos
    path('listar_productos', listar_productos, name="listar_productos"),
    path('editar_productos/<id>/', editar_productos, name="editar_productos"),
    path('eliminar_productos/<id>/', eliminar_productos, name="eliminar_productos"),
    
    #modificar marcas
    path('listar_marcas', listar_marcas, name="listar_marcas"),
    path('editar_marcas/<id>/', editar_marcas , name="editar_marcas"),
    path('eliminar_marcas/<id>/', eliminar_marcas, name="eliminar_marcas"),
    
    #modificar categorias
    path('listar_categorias', listar_categorias, name="listar_categorias"),
    path('editar_categorias/<id>/', editar_categorias, name="editar_categorias"),
    path('eliminar_categorias/<id>/', eliminar_categorias, name="eliminar_categorias"),
    
    path('registro/', registro, name='registro'),

]

