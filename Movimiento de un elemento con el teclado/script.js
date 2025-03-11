document.addEventListener('keydown', function(event) {
    const square = document.getElementById('square');
    const step = 10;
    let top = parseInt(square.style.top);
    let left = parseInt(square.style.left);
    const maxTop = window.innerHeight - square.offsetHeight;
    const maxLeft = window.innerWidth - square.offsetWidth;

    switch(event.key) {
        case 'ArrowUp':
            if (top > 0) square.style.top = (top - step) + 'px';
            break;
        case 'ArrowDown':
            if (top < maxTop) square.style.top = (top + step) + 'px';
            break;
        case 'ArrowLeft':
            if (left > 0) square.style.left = (left - step) + 'px';
            break;
        case 'ArrowRight':
            if (left < maxLeft) square.style.left = (left + step) + 'px';
            break;
    }
});
