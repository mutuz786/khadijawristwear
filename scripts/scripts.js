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
      {"id": "1","name": "Combo 1","image": "images/combo1.jpg","price": "200.00"},
      {"id": "2","name": "Combo 2","image": "images/combo2.jpg","price": "220.00"},
      {"id": "3","name": "Combo 3","image": "images/combo3.jpg","price": "220.00"},
      {"id": "4","name": "Combo 4","image": "images/combo4.jpg","price": "230.00"},
      {"id": "5","name": "Combo 5","image": "images/combo5.jpg","price": "250.00"},
      {"id": "6","name": "Combo 6","image": "images/combo6.jpg","price": "250.00"},
      {"id": "7","name": "Combo 7","image": "images/combo7.jpg","price": "250.00"},
      {"id": "8","name": "Combo 8","image": "images/combo8.jpg","price": "250.00"},
      {"id": "9","name": "Combo 9","image": "images/combo9.jpg","price": "250.00"},
      {"id": "10","name": "Combo 10","image": "images/combo10.jpg","price": "250.00"},
      {"id": "11","name": "Combo 11","image": "images/combo11.jpg","price": "250.00"},
      {"id": "12","name": "Combo 12","image": "images/combo12.jpg","price": "280.00"},
      {"id": "13","name": "Combo 13","image": "images/combo13.jpg","price": "300.00"},
      {"id": "14","name": "Combo 14","image": "images/combo14.jpg","price": "300.00"},
      {"id": "15","name": "Combo 15","image": "images/combo15.jpg","price": "300.00"},
      {"id": "16","name": "Combo 16","image": "images/combo16.jpg","price": "300.00"},
      {"id": "17","name": "Combo 17","image": "images/combo17.jpg","price": "300.00"},
      {"id": "18","name": "Combo 18","image": "images/combo18.jpg","price": "330.00"},
      {"id": "19","name": "Combo 19","image": "images/combo19.jpg","price": "800.00"},
      {"id": "20","name": "Combo 20","image": "images/combo20.jpg","price": "0.00"}
    ],
    "charms":[
      {"id": "1","name": "Charms 1","image": "images/charms1.jpg","price": "200.00"},
      {"id": "2","name": "Charms 2","image": "images/charms2.jpg","price": "220.00"},
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
