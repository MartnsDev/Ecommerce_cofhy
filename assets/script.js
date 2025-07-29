
let cart = [];


function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}


function updateCart() {
    let cartCount = document.getElementById('cart-count');
    let cartTotal = document.getElementById('cart-total');
    let cartItems = document.getElementById('cart-items');

    cartCount.textContent = cart.length;


    let total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    cartTotal.textContent = total.toFixed(2);

    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>R$ ${item.price}</span>
        </div>
    `).join('');
}


function toggleCart() {
    document.getElementById('cart-dropdown').classList.toggle('active');
}

function goToCheckout() {
    let orderText = 'Olá, gostaria de fazer um pedido:\n';
    cart.forEach(item => {
        orderText += `${item.name}: 1 unidade - R$ ${item.price}\n`;
    });
    orderText += `Total: R$ ${document.getElementById('cart-total').textContent}\nComo posso pagar?`;
    window.location.href = `https://wa.me/5511963822159?text=${encodeURIComponent(orderText)}`;
}


function clearCart() {
    cart = [];
    updateCart();
}


document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let name = button.getAttribute('data-name');
        let price = button.getAttribute('data-price');
        addToCart(name, price);
    });
});
