//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

window.addEventListener('DOMContentLoaded', function(){
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', function(e){
        e.preventDefault();
        console.log("Red Box: Touchstart");
        console.log(e.target);
        console.log(e.touches[0].target); //Все пальцы
        console.log(e.changedTouches); //Список пальцев которые были задейственны
        console.log(e.targetTouches); //Действие пальцами
    });

    // box.addEventListener('touchmove', function(e){
    //     e.preventDefault();
    //     console.log("Red Box: Touchmove");
    // });


    box.addEventListener('touchmove', function(e){
        e.preventDefault();
        console.log("Red Box: " + e.touches[0].pageX);
    });

    // box.addEventListener('touchend', function(e){
    //     e.preventDefault();
    //     console.log("Red Box: Touchend");
    // });

    // -----------------------------------

    // new RegExp('pattern', 'flags');

    // // /pattern/flags

// let ans = prompt("Введите ваше имя");

// let reg = /n/g;

// // console.log(ans.search(reg));
// // console.log(ans.match(reg));

// console.log(reg.test(ans));

// i 
// g 
// m

// =====================

// let pass = prompt('Введите пароль');

// console.log(pass.replace(/./g, "#"));
// alert('12-36-56'.replace(/-/g, ':'));

// ===== Классы 

// \d цифры  \D не цифры
// \w буквы  \W не буквы 
// \s   \S


// let ans = prompt("Введите число");

// let reg = /\d/g;


// console.log(ans.match(reg));


// let str = "My name is/ R2D2";

// console.log(str.match(/\w\d\w\d/i));
// console.log(str.match(/\//i));


alert(str); // ?
var str = "Hello";
});