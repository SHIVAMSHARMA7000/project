const cartCount = document.getElementById("cart-count");
const addButtons = document.querySelectorAll(".add-to-cart");
const filterButtons = document.querySelectorAll(".filter");
const productCards = document.querySelectorAll(".product-card");

let cartTotal = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartTotal += 1;
    cartCount.textContent = cartTotal;
    button.textContent = "Added";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "Add";
      button.disabled = false;
    }, 1000);
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;
    productCards.forEach((card) => {
      const matches = filter === "all" || card.dataset.category === filter;
      card.style.display = matches ? "grid" : "none";
    });
  });
});

const newsletterForm = document.querySelector(".newsletter-form");
newsletterForm.addEventListener("submit", (event) => {
  event.preventDefault();
  newsletterForm.reset();
  alert("Thanks for subscribing! We'll be in touch soon.");
});
