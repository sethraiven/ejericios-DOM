document.addEventListener('DOMContentLoaded', () => {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = 'Esta es una notificación emergente';
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('show');
    }, 100);

    setTimeout(() => {
        notification.classList.remove('show');
    }, 4100);
});
