new Swiper ('.banner .swiper-container', {
  autoplay: {
    delay: 3000
  },
  loop: true,
  spaceBetween: 0,
  slidesPerView: 3.5,
  centeredSlides: true,
  navigation: {
    prevEl: '.banner .swiper-prev',
    nextEl: '.banner .swiper-next'
  }
});