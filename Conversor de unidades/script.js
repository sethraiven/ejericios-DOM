document.getElementById('kilometers').addEventListener('input', (event) => {
  const kilometers = parseFloat(event.target.value);
  const miles = (kilometers * 0.621371).toFixed(2);
  document.getElementById('miles').textContent = isNaN(miles) ? 0 : miles;
});
