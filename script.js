const menuBtn = document.querySelector(".menu-btn");
const links = document.querySelector(".nav-links");

menuBtn?.addEventListener("click", () => {
  links?.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((a) => {
  a.addEventListener("click", () => {
    links?.classList.remove("open");
  });
});


/* Contact form */
const contactForm = document.querySelector(".contact-form");

contactForm?.addEventListener("submit", (event) => {
  event.preventDefault();

  alert(
    "Thank you for contacting Blush & Bloom! We will get back to you soon."
  );

  contactForm.reset();
});
