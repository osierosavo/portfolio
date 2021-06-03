
// container1 sunglasses-eyeglasses
const sunglassBtn = document.querySelector('.sunglasses-btn');
const eyeglassBtn = document.querySelector('.eyeglasses-btn');
const eyeglasses = document.querySelector('.eyeglasses');
const sunglasses = document.querySelector('.sunglasses');

sunglassBtn.addEventListener('click', function(){
  eyeglasses.style.display = 'none';
  sunglasses.style.display = 'block'
});
eyeglassBtn.addEventListener('click', function(){
  eyeglasses.style.display = 'block';
});