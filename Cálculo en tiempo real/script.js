document.addEventListener('DOMContentLoaded', function() {
    const cantidadInput = document.getElementById('cantidad');
    const unidadOrigenSelect = document.getElementById('unidad-origen');
    const unidadDestinoSelect = document.getElementById('unidad-destino');
    const resultDiv = document.getElementById('result');

    const conversiones = {
        'metros-kilometros': 0.001,
        'kilometros-metros': 1000,
        'millas-kilometros': 1.60934,
        'kilometros-millas': 0.621371,
        // ...otras conversiones...
    };

    function convertir() {
        const cantidad = parseFloat(cantidadInput.value);
        const unidadOrigen = unidadOrigenSelect.value;
        const unidadDestino = unidadDestinoSelect.value;
        const claveConversion = `${unidadOrigen}-${unidadDestino}`;
        const factorConversion = conversiones[claveConversion] || 1;
        const resultado = cantidad * factorConversion;
        resultDiv.textContent = `Resultado: ${resultado} ${unidadDestino}`;
    }

    cantidadInput.addEventListener('input', convertir);
    unidadOrigenSelect.addEventListener('change', convertir);
    unidadDestinoSelect.addEventListener('change', convertir);
});
