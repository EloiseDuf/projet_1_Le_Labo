const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  if (navLinks.classList === "mobile-menu") {
    document.body.style.overflow = "on";
  } else {
    document.body.style.overflow = "hidden";
    navLinks.classList.toggle("mobile-menu");
  }
});
