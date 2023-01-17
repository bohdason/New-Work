/***JS Nav Toggle*********** */







const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR TOGGLE FOR MOBILE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("lock");
}

addEventOnElements(navTogglers, "click", toggleNavbar);




const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((navLink) => {
  navLink.addEventListener("click", (_) => {
    if (overlay.classList.contains("active")) {
      document.body.classList.remove("lock");
      overlay.classList.remove("active");
      navbar.classList.remove("active");
    }
  }
  );
});








/**
 * HEADER
 * active header when window scroll down to 100px
 */


const topBtn = document.querySelector(".back-top-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {

    topBtn.classList.add("active");
  } else {

    topBtn.classList.remove("active");
  }
});







const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);


// window.onload = function() {
//   document.querySelector('[data-filter=".advice"]').click();
// };


/**
 * HEADER
 * active header when window scroll up
 */
const body = document.body;
const header = document.querySelector(".header");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;



window.addEventListener("scroll", () => {
  const currentScroll = window.pageYOffset;
  if (currentScroll <= 0) {
    header.classList.remove(scrollUp);

    return;
  }

  if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    header.classList.remove(scrollUp);
    header.classList.add(scrollDown);

  } else if (
    currentScroll < lastScroll &&
    header.classList.contains(scrollDown)
  ) {
    // up
    header.classList.remove(scrollDown);
    header.classList.add(scrollUp);

  }
  lastScroll = currentScroll;
});