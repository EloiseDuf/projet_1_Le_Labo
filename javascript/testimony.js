function previous() {
  const widthSlider = document.querySelector('.slider').offsetWidth;
  document.querySelector('.slider_content').scrollLeft -= widthSlider;
}

function next() {
  const widthSlider = document.querySelector('.slider').offsetWidth;
  document.querySelector('.slider_content').scrollLeft += widthSlider;
  //document.querySelector('.slider_content').scrollLeft +=20;
}

const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".nav-links");

    menuHamburger.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-menu");
    });