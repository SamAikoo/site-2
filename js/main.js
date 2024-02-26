'use strict';


{
  const toggleBtn = document.querySelector('.toggle_btn');
  const header = document.getElementById('header');
  const mask = document.getElementById('mask');

  toggleBtn.addEventListener('click', () => {
    header.classList.toggle('open');
  })

  mask.addEventListener('click', () => {
    header.classList.remove('open');
  })
}
