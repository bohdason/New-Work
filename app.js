/***JS Nav Toggle*********** */

function results() {

    const nav = document.querySelector(".nav__wrapper");
    const navToggle = document.querySelector(".nav-toggle-btn");
    const dataOverlay = document.querySelector(".overlay");
    
    navToggle.addEventListener("click", function () {

        nav.classList.toggle("active");
        navToggle.classList.toggle("active");
        dataOverlay.classList.toggle("active");
        document.body.classList.toggle("lock");

    });

    const navLinks = document.querySelectorAll(".nav__link");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (_) => {
          if (navToggle.classList.contains("active")) {
              document.body.classList.remove("lock");
              navToggle.classList.remove("active");
              dataOverlay.classList.remove("active");
              nav.classList.remove("active");
          }
        }
    );
  });


  dataOverlay.addEventListener("click", function() {
    if (navToggle.classList.contains("active")) {
      document.body.classList.remove("lock");
      navToggle.classList.remove("active");
      dataOverlay.classList.remove("active");
      nav.classList.remove("active");
  }
  });
  
};
results();




/**
 * HEADER
 * active header when window scroll down to 100px
 */

const header = document.querySelector(".header");

window.addEventListener("scroll", function(){
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
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
