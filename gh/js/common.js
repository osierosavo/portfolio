// mobile gnb
const gnbM = document.querySelector('.main-menu');
const gnbBtn = document.querySelector('.openBtnM');
const gnbBtnClose = document.querySelector('.closeBtnM');
let isHideMobileGnb = false;

gnbBtn.addEventListener('click', function(){
  isHideMobileGnb = !isHideMobileGnb
  if(isHideMobileGnb) {
    gnbM.classList.add('show');
    document.querySelector('main').style.opacity = "0";
  }else {
    gnbM.classList.remove('show');
  }
});

gnbBtnClose.addEventListener('click', function(){
  isHideMobileGnb = !isHideMobileGnb
  if(isHideMobileGnb) {
    gnbM.classList.add('show');
  }else {
    gnbM.classList.remove('show');
    document.querySelector('main').style.opacity = "1";
  }
});
