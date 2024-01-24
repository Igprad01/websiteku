let hamburger = document.querySelector('#hamburger');
const menuNav = document.querySelector('#menu-nav');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger-active');
  menuNav.classList.toggle('hidden');
});

// navbar-fixed 

window.onscroll = function () {
  const header = document.querySelector('header'); // Change to 'header' here
  const fixedNav = header.offsetTop;

  if (window.scrollX > fixedNav) { // Change to scrollY here
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};
