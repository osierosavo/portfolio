
// swiper
new Swiper ('.works .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 0, 
  centeredSlides: true,
  loop: true,
  navigation: {
    prevEl: '.works .swiper-prev',
    nextEl: '.works .swiper-next'
  }
});
