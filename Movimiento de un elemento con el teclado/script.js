document.addEventListener('keydown', function(event) {
    const square = document.getElementById('square');
    const step = 10;
    let top = parseInt(square.style.top);
    let left = parseInt(square.style.left);

    switch(event.key) {
        case 'ArrowUp':
            square.style.top = (top - step) + 'px';
            break;
        case 'ArrowDown':
            square.style.top = (top + step) + 'px';
            break;
        case 'ArrowLeft':
            square.style.left = (left - step) + 'px';
            break;
        case 'ArrowRight':
            square.style.left = (left + step) + 'px';
            break;
    }
});
