//*******************SWIPER SLIDER JS*************************//

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2.9,
  spaceBetween: 10,
  disableOnInteraction: true,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
    
  // },
  
  slidesPerGroup: 3,
  breakpoints: {
    0: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 3.5,
      spaceBetween: 10,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
});

