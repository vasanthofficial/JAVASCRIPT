'use strict';
const modal = document.querySelector('.modal');
const show = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('.show-modal');

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    console.log('VASANTH');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const close = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

show.addEventListener('click', close);
overlay.addEventListener('click', close);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    close();
  }
});
