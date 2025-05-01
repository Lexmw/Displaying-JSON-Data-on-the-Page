const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    description: "Ergonomic wireless mouse with USB receiver",
    price: 29.99,
    inStock: true
  },
  {
    id: 2,
    name: "Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with blue switches",
    price: 89.99,
    inStock: false
  },
  {
    id: 3,
    name: "USB-C Hub",
    description: "5-in-1 USB-C hub with HDMI and SD card reader",
    price: 45.00,
    inStock: true
  }
];

const container = document.getElementById("productList");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "bg-white p-4 rounded shadow hover:shadow-lg transition";

  card.innerHTML = `
    <h2 class="text-xl font-semibold mb-2">${product.name}</h2>
    <p class="text-gray-600 mb-2">${product.description}</p>
    <p class="text-gray-800 font-bold">$${product.price.toFixed(2)}</p>
    <p class="${product.inStock ? 'text-green-600' : 'text-red-600'} font-semibold">
      ${product.inStock ? 'In Stock' : 'Out of Stock'}
    </p>
  `;

  container.appendChild(card);
});
