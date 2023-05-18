var final = '';

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

