$(function() {
    // Código jQuery
    
    var selectedMarca = '';
    var selectedCategoria = '';
    
    let numeros = '1234567890';
    let letras = 'qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚáéíóú';
    let clave = '1234567890qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNMÁÉÍÓÚ-_#';
    // Expresiones regulares
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    
    $('#txtNombre').keypress(function(e) {
        let caracter = String.fromCharCode(e.which);
        let nombre = letras + ' ';
        if (nombre.indexOf(caracter) < 0)
            return false; // No dibuja el carácter de la tecla
    });
    
    $('#txtCod').keypress(function(e) {
        let caracter = String.fromCharCode(e.which);
        if (numeros.indexOf(caracter) < 0)
            return false; // No dibuja el carácter de la tecla
    });
    
    $('#selectMarca').change(function() {
        selectedMarca = $(this).find(':selected').text();
    });

    $('#selectCategoria').change(function() {
        selectedCategoria = $(this).find(':selected').text();
    });

    $('#btnGuardar').click(function() {
        // Validar campos vacíos
        if (!$.trim($('#txtNombre').val())) {
            alert('Falta especificar el nombre');
            $('#txtNombre').focus();
        } else if ($("#selectMarca").val() === "Seleccione una marca") {
            alert("Debe seleccionar una marca válida");
            $("#selectMarca").focus();
        } else if ($("#selectCategoria").val() === "Seleccione una categoria") {
            alert("Debe seleccionar una categoría válida");
            $("#selectCategoria").focus();
        } else if (!$('#txtCod').val()) {
            alert('Falta especificar el código');
            $('#txtCod').focus();
        } else if (!$('#txtPrecioCosto').val()) {
            alert('Falta especificar el precio costo');
            $('#txtPrecioCosto').focus();
        } else if (!$('#txtPrecioVenta').val()) {
            alert('Falta especificar el precio venta');
            $('#txtPrecioVenta').focus();
        } else if (!$('#txtCantidad').val()) {
            alert('Falta especificar la cantidad');
            $('#txtCantidad').focus();
        }
        
        
        
        
        alert('Registro Completo\n' +
            'Nombre        : ' + $('#txtNombre').val() + '\n' +
            'Marca         : ' + selectedMarca + '\n' +
            'Categoria     : ' + selectedCategoria + '\n' +
            'Precio Costo  : ' + $('#txtPrecioCosto').val() + '\n' +
            'Precio Venta  : ' + $('#txtPrecioVenta').val() + '\n' +
            'Cantidad      : ' + $('#txtCantidad').val()
        );
    });
});