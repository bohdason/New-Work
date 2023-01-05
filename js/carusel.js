new Swiper(".swiper", {
    

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },

      

      slidesPerView: 3,
      loop: true,
      spaceBetween: 30,




      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        480: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 3,
        }
      },
    
  });