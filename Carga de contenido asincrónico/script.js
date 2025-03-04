document.getElementById('loadButton').addEventListener('click', function() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = 'Cargando...';
    contentDiv.style.display = 'block';

    setTimeout(function() {
        contentDiv.innerHTML = 'Contenido cargado exitosamente.';
    }, 2000);
});
