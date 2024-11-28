const products = [
  { id: 1, name: '商品 A', price: 100 },
  { id: 2, name: '商品 B', price: 200 },
  { id: 3, name: '商品 C', price: 300 }
];

let cart = [];

// 渲染商品列表
const renderProductList = () => {
  const productListContainer = document.getElementById('product-list');
  productListContainer.innerHTML = '';
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.classList.add('product');
    productElement.innerHTML = `
      <h3>${product.name}</h3>
      <p>價格: $${product.price}</p>
      <button onclick="addToCart(${product.id})">加入購物車</button>
    `;
    productListContainer.appendChild(productElement);
  });
};

// 加入購物車
const addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  cart.push(product);
  updateCart();
};

// 更新購物車
const updateCart = () => {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalPriceContainer = document.getElementById('total-price');
  cartItemsContainer.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const cartItemElement = document.createElement('div');
    cartItemElement.classList.add('cart-item');
    cartItemElement.innerHTML = `
      <h4>${item.name}</h4>
      <p>價格: $${item.price}</p>
    `;
    cartItemsContainer.appendChild(cartItemElement);
    totalPrice += item.price;
  });

  totalPriceContainer.innerText = `總金額: $${totalPrice}`;
};

// 初始渲染
if (document.getElementById('product-list')) {
  renderProductList();
}
if (document.getElementById('cart-items')) {
  updateCart();
}
