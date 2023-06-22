/* var final = '';

$(function() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        var precio = parseInt($("#art").text());
        var dolarValue = precio / dailyIndicators.dolar.valor;
        var final = parseFloat(dolarValue.toFixed(1));
        $('#txtDolar').val(final);
        document.getElementById('input').innerHTML = final;
        
        var precioApi = $("#txtDolar").val();
        $("[name='precioApi']").text("$" + precioApi);
    });
}); 
 */
/* $(function() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        var precioApi = parseFloat(dailyIndicators.dolar.valor.toFixed(1));
        $("[name='precioApi']").text("$" + precioApi);
    });
}); */

/* $(function() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        var tipoCambioDolar = dailyIndicators.dolar.valor;

        $('[name="precioApi"]').each(function() {
            var precioChile = parseInt($(this).text().replace('$','').replace(',',''));
            var precioDolar = (precioChile / tipoCambioDolar).toFixed(2);
            $(this).text("$" + precioDolar);
        });
    });
});
 */

/* $(function() {
    var tipoCambioDolar = 801.9;

    $('[name="precioApi"]').each(function() {
        var precioOriginal = parseFloat($(this).data('precio-original'));
        var precioDolar = (precioOriginal / tipoCambioDolar).toFixed(2);
        $(this).text("$" + precioDolar);
    });
});
 */

/* $(function() {
    
    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        
    });
    
    var tipoCambioDolar = dailyIndicators;

    $('[name="precioApi"]').each(function() {
        var precioOriginal = parseFloat($(this).data('precio-original'));
        var precioDolar = (precioOriginal / tipoCambioDolar).toFixed(2);
        $(this).text("$" + precioDolar);
    });
});


$(function() {
    
    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        var precio = parseInt($("#art").text());
        var dolarValue = precio/dailyIndicators.dolar.valor;
        var final = parseFloat(dolarValue.toFixed(1));
        $('#txtDolar').val(final);
        document.getElementById('input').innerHTML = final ;
    });

});
 */

$(function() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var dailyIndicators = data;
        var tipoCambioDolar = dailyIndicators.dolar.valor;

        $('[name="precioApi"]').each(function() {
            var precioOriginal = parseFloat($(this).data('precio-original'));
            var precioDolar = (precioOriginal / tipoCambioDolar).toFixed(2);
            $(this).text("$" + precioDolar);
        });
    });
});