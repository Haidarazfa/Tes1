const products = {
    brand1: [
        { name: 'Produk 1', price: 10000 },
        { name: 'Produk 2', price: 15000 },
    ],
    brand2: [
        { name: 'Produk 3', price: 12000 },
        { name: 'Produk 4', price: 18000 },
    ],
    brand3: [
        { name: 'Produk 5', price: 20000 },
        { name: 'Produk 6', price: 22000 },
    ],
    // Add more products for each brand as needed
};

function showProducts(brand) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products[brand].forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <p>${product.name} - Rp${product.price}</p>
            <button class="cart-btn" onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });

    document.getElementById('products').style.display = 'block';
}

function closeModal() {
    document.getElementById('products').style.display = 'none';
}

let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    // Update the cart display or perform any other actions as needed
    console.log(cart);
}
