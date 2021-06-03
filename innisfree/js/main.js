
//promotion swiper
new Swiper ('.container01 .swiper-container', {
  slidesPerView: 3, // 한번에 보여줄 슬라이드 개수
  spaceBetween: 0, // 슬라이드 사이 여백 (10px)
  centeredSlides: false, // 첫번째 슬라이드가 가운데 보이기
  loop: false,
  speed: 1000,
  pagination: {
    el: '.container01 .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true // 사용자가 페이지 번호 요소 제어 할 수 있음
  },
  navigation: {
    nextEl: '.container01 .swiper-next'
  }
});
