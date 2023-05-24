const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-links");

menuHamburger.addEventListener("click", () => {
  navLinks.classList.toggle("mobile-menu");
  
  if (document.body.style.overflow === "hidden") {
    document.body.style.overflow = "auto";
    document.body.dataset.class === "pc-menu";
  } else {
    document.body.style.overflow = "hidden";
    document.body.dataset.class === "mobile-menu";
  }
  console.log(document.body);
});

