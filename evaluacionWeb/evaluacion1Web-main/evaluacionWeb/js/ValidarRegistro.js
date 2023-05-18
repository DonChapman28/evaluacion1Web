$(function()
{
    // codigo jQuery

    var selectedRegion = '';
    var selectedEducacion = '';

    let numeros = '1234567890';
    let letras  = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚáéíóú';
    let clave = '1234567890qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚáéíóú-_#';
    // expresiones regulares
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/
    
    $('#txtRut').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })
    $('#txtDv').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        let patron = numeros + 'kK';
        if(patron.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })
    $('#txtNombre').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        let nombre = letras + ' ';
        if(nombre.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })
    $('#txtApellido').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        let nombre = letras + ' ';
        if(nombre.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })
    $('#txtEmail').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        let patron = numeros + letras + '_-.@';
        if(patron.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })

    $('#txtPass').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(clave.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })
   
    $('#selectRegion').change(function() {
        selectedRegion = $(this).find(':selected').text();
    });

    $('#txtTelefono').keypress(function(e)
    {
        let caracter = String.fromCharCode(e.which);
        if(numeros.indexOf(caracter) < 0)
            return false; // no dibuja el carecter de la tecla
    })

    $('#selectEducacion').change(function() {
        selectedEducacion = $(this).find(':selected').text();
    });

    

    

    $('.btnLimpiar').click(function()
    {
        $('.txtRut, .txtDv, .txtNombre, .txtEmail').val('');
        $('.txtRut').focus();
    })
    $('#btnGuardar').click(function()
    {
        // validar campos vacios
        if(!$('#txtRut').val())
        {
            alert('Falta especificar el número de rut');
            $('#txtRut').focus();
        }
        else if(!$('#txtDv').val())
        {
            alert('Falta especificar el dv');
            $('#txtDv').focus();
        }
        else if(esValidoElRut($('#txtRut').val(), $('#txtDv').val()) === false)
         {
            alert('El rut no es válido');
            $('#txtRut').focus();
          }
        
        else if(!$.trim($('#txtNombre').val()))
        {
            alert('Falta especificar el nombre');
            $('#txtNombre').focus();
        }
        else if(!$.trim($('#txtApellido').val()))
        {
            alert('Falta especificar el apelido');
            $('#txtApellido').focus();
        }
        else if(!$('#txtEmail').val())
        {
            alert('Falta especificar el Email');
            $('#txtEmail').focus();
        }
        else if(! emailRegex.test($('#txtEmail').val())) // verifica que el formato esta correcto
        {
            alert('El formato del Email no es válido.');
            $('#txtEmail').focus();
        }
        else if(!$('#txtPass').val())
        {
            alert('Falta especificar la contraseña');
            $('#txtPass').focus();
        }    
        else
        {
            $('#txtNombre').val($.trim($('#txtNombre').val()));
        }

        
        

        
        alert('Registro Completo'+ '\n' + 
        'Rut      : ' + $('#txtRut').val() + '-' + $('#txtDv').val() + '\n' +
        'Nombre   : ' + $('#txtNombre').val() + '\n' +
        'Apellido : ' + $('#txtApellido').val() +  '\n' +
        ///'Fecha Nacimiento    : ' + $('#txtEmail').val()  + '\n' +
        'Email    : ' + $('#txtEmail').val()  + '\n' +
        'Region     : ' + selectedRegion + '\n' +
        'Telefono : ' + $('#txtTelefono').val()  + '\n' +
        'Nivel Educacional    : ' + selectedEducacion
        
        );

    })


    function esValidoElRut(Rut,Digito)
    {
		let contador= Rut.length-1;
		let factor  = 2;
		let suma    = 0;
		let caracter= 0;
 
		for( ; contador>=0 ; contador--)
		{
			caracter = Rut.charAt(contador);
			suma += (factor * caracter);
			if (++factor > 7)
				factor=2;		
		}
        return "-123456789K0".charAt(11-(suma % 11)) == Digito.toUpperCase();            
    }   

});