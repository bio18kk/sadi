
let cart = [];
const cartItemsEl = document.getElementById('cart-items');
const cartCountEl = document.getElementById('cart-count');
const totalPriceEl = document.getElementById('total-price');

function addToCart(name, price) {
  cart.push({ name, price });
  updateCartUI();
}

function updateCartUI() {
  cartItemsEl.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} — $${item.price.toFixed(2)}`;
    cartItemsEl.appendChild(li);
    total += item.price;
  });

  cartCountEl.textContent = cart.length;
  totalPriceEl.textContent = `$${total.toFixed(2)}`;
}

function checkout() {
  if (cart.length === 0) {
    alert('Ваша корзина пуста!');
    return;
  }

  let summary = cart.map(item => `${item.name} — $${item.price.toFixed(2)}`).join('\n');
  summary += `\n\nИтого: $${cart.reduce((sum, item) => sum + item.price, 0).toFixed(2)}`;
  alert('Спасибо за покупку!\n\n' + summary);

  // Очистка корзины
  cart = [];
  updateCartUI();
}
