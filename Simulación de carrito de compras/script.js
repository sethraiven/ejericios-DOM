document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const price = parseFloat(product.getAttribute('data-price'));
    const cart = document.querySelector('.cart');
    const totalElement = document.querySelector('.total');

    // Agregar producto al carrito
    const listItem = document.createElement('li');
    listItem.textContent = product.querySelector('span').textContent;
    cart.appendChild(listItem);

    // Actualizar total
    const currentTotal = parseFloat(totalElement.textContent);
    totalElement.textContent = (currentTotal + price).toFixed(2);
  });
});
