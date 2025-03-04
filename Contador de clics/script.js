let contador = 0;
document.getElementById('contadorBtn').addEventListener('click', function() {
    contador++;
    this.textContent = 'Clics: ' + contador;
});
