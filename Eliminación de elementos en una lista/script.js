document.getElementById('agregar-tarea').addEventListener('click', function() {
    const tareaInput = document.getElementById('nueva-tarea');
    const tareaTexto = tareaInput.value;
    if (tareaTexto !== '') {
        const nuevaTarea = document.createElement('li');
        nuevaTarea.textContent = tareaTexto;

        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.addEventListener('click', function() {
            nuevaTarea.remove();
        });

        nuevaTarea.appendChild(botonEliminar);
        document.getElementById('lista-tareas').appendChild(nuevaTarea);
        tareaInput.value = '';
    }
});
