document.addEventListener("DOMContentLoaded", function () {
  fetch('products.json')
    .then(response => response.json())
    .then(products => {
      const container = document.getElementById("product-container");

      products.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.category}" />
          <h3>${product.title}</h3>
          <p>${product.description}</p>
          <p><strong>${product.price}</strong></p>
        `;
        container.appendChild(card);
      });
    })
    .catch(error => {
      console.error("Error loading products:", error);
    });
});
