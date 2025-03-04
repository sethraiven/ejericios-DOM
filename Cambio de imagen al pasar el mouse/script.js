document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('banner');
    const originalImage = 'url("https://t4.ftcdn.net/jpg/02/35/51/47/240_F_235514796_GzYS8upXtFz953zbcPspx3ALgMzcRceY.jpg")' // Asegúrate de que esta ruta sea correcta
    const hoverImage = 'url("https://t4.ftcdn.net/jpg/03/48/25/33/240_F_348253398_bagWClsS5NIqBi9sJDRPVxenCtKFyJsP.jpg")'; // Asegúrate de que esta ruta sea correcta

    banner.style.backgroundImage = originalImage;

    banner.addEventListener('mouseover', function() {
        banner.style.backgroundImage = hoverImage;
    });

    banner.addEventListener('mouseout', function() {
        banner.style.backgroundImage = originalImage;
    });
});
