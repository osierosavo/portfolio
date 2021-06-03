// 이메일 & 번호 복사
const notification = document.querySelector('.copied');
const hide = document.querySelector('.show');

document.querySelector(".copy1").addEventListener("click", function(){
  const tempElem = document.createElement('textarea');
  tempElem.value = 'osierosavo@gmail.com';  
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);

  notification.classList.add('show');

  setTimeout(function() {
    notification.classList.remove('show');
  }, 600);

  return;

});

document.querySelector(".copy2").addEventListener("click", function(){
  const tempElem = document.createElement('textarea');
  tempElem.value = '01039551248';  
  document.body.appendChild(tempElem);

  tempElem.select();
  document.execCommand("copy");
  document.body.removeChild(tempElem);
  
  notification.classList.add('show');

  setTimeout(function() {
    notification.classList.remove('show');
  }, 600);

  return;

});

// 메뉴 변경

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
    
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('active')
    });
    tabs.forEach(tab => {
      tab.classList.remove('active')
    });
    target.classList.add('active')
    tab.classList.add('active')
  })
})

// swiper
new Swiper ('.works .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 0, 
  centeredSlides: true,
  loop: true,
  pagination: {
    el: '.works .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.works .swiper-prev',
    nextEl: '.works .swiper-next'
  }
});
