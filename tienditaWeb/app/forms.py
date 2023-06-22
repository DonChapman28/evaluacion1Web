from django import forms
from .models import Cliente,Producto,Marca,Categoria
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User


class ClienteForm(forms.ModelForm):
    class Meta:
        model = Cliente
        fields = '__all__'

        """ widgets = {
            "fechaNacimiento": forms.SelectDateWidget()
        } """

class ProductoForm(forms.ModelForm):
    class Meta:
        model = Producto
        fields = '__all__'

class MarcaForm(forms.ModelForm):
    class Meta:
        model = Marca
        fields = '__all__'

class CategoriaForm(forms.ModelForm):
    class Meta:
        model = Categoria
        fields = '__all__'

class CustomUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ('username', 'first_name','last_name', 'email', 'password1', 'password2')
