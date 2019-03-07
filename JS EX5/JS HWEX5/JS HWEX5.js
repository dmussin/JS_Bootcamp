'use strict';

let menu = document.querySelector(".menu"),
    column = document.querySelectorAll(".column"),
    menuItem = document.querySelectorAll('.menu .menu-item'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    questionHolder = document.getElementById('prompt'),
    question = prompt('Как вы относитесь к технике apple ?', '');


let ul = document.createElement('ul');

ul.classList.add('menu-item');
console.log(ul);

menu.appendChild(ul);

ul.textContent = "Пятый пункт";

menu.insertBefore(menuItem[2], menuItem[1]);

// document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

column[1].removeChild(adv);

title.textContent = "Мы продаем только подлинную технику Apple";

questionHolder.innerHTML = question;