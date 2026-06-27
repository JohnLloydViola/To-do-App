
let themeButton = document.getElementById('themeSwitch');
let themeimage = document.getElementById('themeImg');


themeButton.addEventListener('click', () => {
  if (!document.body.classList.contains('darkMode')) {
    document.body.classList.add('darkMode');
    themeimage.src = 'images/icon-sun.svg';
  }
  else{
     document.body.classList.remove('darkMode')
     themeimage.src = 'images/icon-moon.svg';
  }
});