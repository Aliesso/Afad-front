// src="https://www.youtube.com/embed/gQgpAN-CxPE"
// src="https://www.youtube.com/embed/JH7BuOLC1pM"
// src="https://www.youtube.com/embed/Xdb5UhUKD8I"
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 24,
  grabCursor: true,
  paginationClickable: true,
  breakpoints: {
    944: {
      slidesPerView: 2.4,
    },
  },
  //  autoplay:{
  //    delay: 2500
  //  },
  // loop: true,
});


//DocumentarySlider
function createLightGallery() {
  $("#lightGallery").lightGallery({
    selector: ".documentary_item",
  });
}

$(document).ready(function () {
  createLightGallery();
});

//Documentary Slider mobile
function createMobileLightGallery() {
  $("#mobileLightGallery").lightGallery({
    selector: ".documentary_items",
  });
}

$(document).ready(function () {
  createMobileLightGallery();
});



