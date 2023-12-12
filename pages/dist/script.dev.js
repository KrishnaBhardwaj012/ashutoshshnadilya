"use strict";

var menu = document.querySelector('#menu-bars');
var navbar = document.querySelector('.navbar');

menu.onclick = function () {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

var section = document.querySelectorAll('section');
var navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = function () {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  Array.from(section).forEach(function (sec) {
    var top = window.scrollY;
    var height = sec.offsetHeight;
    var offset = sec.offsetTop - 150;
    var id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      Array.from(navlinks).forEach(function (links) {
        links.classList.remove('active');
        document.querySelector('header .navbar a[href*="' + id + '"]').classList.add('active');
      });
    }
  });
};

document.querySelector('#search-icon').onclick = function () {
  document.querySelector('#search-form').classList.toggle('active');
};

document.querySelector('#close').onclick = function () {
  document.querySelector('#search-form').classList.remove('active');
};

function loader() {
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut() {
  setInterval(loader, 3000);
}

window.onload = fadeOut;
//# sourceMappingURL=script.dev.js.map
