let cart = [];
let total = 0;

function addToCart(name, price) {
  cart.push({ name, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cart-items");
  cartList.innerHTML = "";
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₹${item.price}`;
    cartList.appendChild(li);
  });
  document.getElementById("total").textContent = `Total: ₹${total}`;
}

document.getElementById("checkout-btn").addEventListener("click", () => {
  localStorage.setItem("cartTotal", total);
  window.location.href = "payment.html";
});
