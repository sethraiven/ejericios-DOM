let timeLeft = 10;
const timerElement = document.getElementById('timer');

const countdown = setInterval(() => {
    if (timeLeft <= 0) {
        clearInterval(countdown);
        timerElement.textContent = '¡Tiempo terminado!';
    } else {
        timerElement.textContent = timeLeft;
        timeLeft--;
    }
}, 1000);
