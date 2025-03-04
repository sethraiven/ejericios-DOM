document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const productList = document.querySelectorAll('.product-item');

    searchInput.addEventListener('input', function() {
        const filter = searchInput.value.toLowerCase();
        productList.forEach(function(product) {
            const text = product.textContent.toLowerCase();
            if (text.includes(filter)) {
                product.style.display = '';
            } else {
                product.style.display = 'none';
            }
        });
    });
});
