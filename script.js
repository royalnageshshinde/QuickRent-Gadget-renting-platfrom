/* File: script.js */
document.addEventListener("DOMContentLoaded", () => {
    // Handle Explore Rentals button click
    const exploreBtn = document.getElementById("explore-btn");
    exploreBtn.addEventListener("click", () => {
      alert("Explore the amazing gadgets available for rent!");
    });
  
    // Handle Rent Now button clicks
    const rentButtons = document.querySelectorAll(".rent-btn");
    rentButtons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Thank you for choosing to rent a gadget. Proceed to checkout!");
      });
    });
  
    // Handle Contact Form submission
    const contactForm = document.getElementById("contact-form");
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you for reaching out! We'll get back to you soon.");
      contactForm.reset();
    });
  });
  