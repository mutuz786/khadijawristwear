// Product Database (JSON)
const productsData = {
  "products": {
    "bracelets": [
      { "id": "1", "name": "Blue Star Bracelet", "image": "images/brac1.jpg", "price": "12.00" },
      { "id": "2", "name": "Red Star Bracelet", "image": "images/brac2.jpg", "price": "12.00" },
      { "id": "3", "name": "Yellow Star Bracelet", "image": "images/brac2.jpg", "price": "12.00" },
      { "id": "4", "name": "Green Star Bracelet", "image": "images/brac2.jpg", "price": "12.00" },
      { "id": "5", "name": "Pink Star Bracelet", "image": "images/brac2.jpg", "price": "12.00" },
      { "id": "6", "name": "Violet Star Bracelet", "image": "images/brac2.jpg", "price": "12.00" },
      { "id": "7", "name": "Brown Star Bracelet", "image": "images/brac2.jpg", "price": "12.00" },
    ],
    "combos": [
      { "id": "1", "name": "Blue Combo Pack", "image": "images/combo1.jpg", "price": "24.00" },
      { "id": "2", "name": "Red Combo Pack", "image": "images/combo2.jpg", "price": "24.00" }
    ],
    "charms": [
      { "id": "1", "name": "Pearl Phone Charm", "image": "images/charm1.jpg", "price": "8.00" },
      { "id": "2", "name": "Butterfly Phone Charm", "image": "images/charm2.jpg", "price": "8.00" }
    ],
    "tasbeeh": [
      { "id": "1", "name": "Crystal Tasbeeh", "image": "images/tasbeeh1.jpg", "price": "15.00" },
      { "id": "2", "name": "Rose Quartz Tasbeeh", "image": "images/tasbeeh2.jpg", "price": "18.00" }
    ],
    "keychains": [
      { "id": "1", "name": "Floral Resin Keychain", "image": "images/key1.jpg", "price": "6.00" },
      { "id": "2", "name": "Heart Charm Keychain", "image": "images/key2.jpg", "price": "6.00" }
    ]
  }
};

// Render Products Dynamic Logic
document.addEventListener("DOMContentLoaded", () => {
  renderCategory("bracelets", "Bracelets");
  renderCategory("combos", "Combos");
  renderCategory("charms", "Phone Charms");
  renderCategory("tasbeeh", "Tasbeeh");
  renderCategory("keychains", "Keychains");
});

// Auto-close mobile navigation menu after clicking a link
document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse);
      bsCollapse.hide();
    }
  });
});

function renderCategory(categoryId, categoryTitle) {
  const container = document.getElementById(`${categoryId}-container`);
  if (!container) return;

  const items = productsData.products[categoryId] || [];
  
  container.innerHTML = items.map(product => `
    <div class="col-6 col-md-4 col-lg-3">
      <div class="card product-card h-100 border-0 shadow-sm">
        <div class="product-img-wrapper">
          <img src="${product.image}" class="card-img-top" alt="${product.name}" onerror="this.src='https://via.placeholder.com/300x300?text=${encodeURIComponent(product.name)}'">
          <!--<button class="btn btn-wishlist" aria-label="Add to Wishlist">♥</button>-->
        </div>
        <div class="card-body d-flex flex-column text-center">
          <h5 class="card-title text-truncate">${product.name}</h5>
          <p class="card-text price-tag mt-auto">$${product.price}</p>
          <!--<button class="btn btn-girly w-100 mt-2">Add to Cart</button>-->
        </div>
      </div>
    </div>
  `).join('');
}
