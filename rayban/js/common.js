// 올해가 몇년인지 만들어내는 코드
// const thisYear = document.querySelector('.this-year');
// thisYear.textContent = new Date().getFullYear();

const mobileSearch = document.querySelector('header .search');
const backgroundM = document.querySelector('.mobile_background');
const headerM = document.querySelector('header .inner');

mobileSearch.addEventListener('click', function () {
  console.log('works!')
  backgroundM.style.backgroundPosition = '100vw, 0'
  headerM.style.marginLeft = '90vw'
});