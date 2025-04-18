
let cart = [];

// Função para adicionar item ao carrinho
function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

// Atualizar o carrinho no frontend
function updateCart() {
    let cartCount = document.getElementById('cart-count');
    let cartTotal = document.getElementById('cart-total');
    let cartItems = document.getElementById('cart-items');

    // Atualiza o número de itens no carrinho
    cartCount.textContent = cart.length;

    // Calcula o total do carrinho
    let total = cart.reduce((sum, item) => sum + parseFloat(item.price), 0);
    cartTotal.textContent = total.toFixed(2);

    // Exibe os itens no carrinho
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>R$ ${item.price}</span>
        </div>
    `).join('');
}

// Alterna visibilidade do carrinho
function toggleCart() {
    document.getElementById('cart-dropdown').classList.toggle('active');
}

// Finaliza a compra via WhatsApp
function goToCheckout() {
    let orderText = 'Olá, gostaria de fazer um pedido:\n';
    cart.forEach(item => {
        orderText += `${item.name}: 1 unidade - R$ ${item.price}\n`;
    });
    orderText += `Total: R$ ${document.getElementById('cart-total').textContent}\nComo posso pagar?`;
    window.location.href = `https://wa.me/5511963822159?text=${encodeURIComponent(orderText)}`;
}

// Limpa o carrinho
function clearCart() {
    cart = [];
    updateCart();
}

// Exemplo de como adicionar ao carrinho
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        let name = button.getAttribute('data-name');
        let price = button.getAttribute('data-price');
        addToCart(name, price);
    });
});
