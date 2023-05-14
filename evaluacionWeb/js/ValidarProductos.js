$(function()
{
    // codigo jQuery

    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚáéíóú';
    let clave = '1234567890qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚáéíóú-_#';
    // expresiones regulares
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/


    
    
    $('#txtNombre').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        let nombre = letras + ' ';
        if(nombre.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })

    $('#txtCod').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })
    

    
    $('#btnGuardar').click(function()
    {
        // validar campos vacios
       
        
        if(!$.trim($('#txtNombre').val()))
        {
            alert('Falta especificar el nombre');
            $('#txtNombre').focus();
        }
        else if ($("#selectMarca").val() === "Seleccione una marca") 
        {
            alert("Debe seleccionar una marca válida");
            $("#selectMarca").focus();
        }
        else if ($("#selectCategoria").val() === "Seleccione una categoria") 
        {
              alert("Debe seleccionar una categoría válida");
              $("#selectCategoria").focus();
        }
        else if(!$('#txtCod').val())
        {
            alert('Falta especificar el codigo');
            $('#txtCod').focus();
        }
        else if(!$('#txtPrecioCosto').val())
        {
            alert('Falta especificar precio costo');
            $('#txtCod').focus();
        }
        else if(!$('#txtPrecioVenta').val())
        {
            alert('Falta especificar precio venta');
            $('#txtCod').focus();
        }
        else if(!$('#txtCantidad').val())
        {
            alert('Falta especificar cantidad');
            $('#txtCod').focus();
        }
       
    })

      
    

});