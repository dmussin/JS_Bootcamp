'use strict';

a = 5; 
console.log(a);
// console.log(leftBorderWidth);
// var leftBorderWidth = 1;
// {
// let second = 2;
// }
// const pi = 3.14;

// console.log(second);

var number = 5;
var string = "Hello!";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {}; //коллекция данных 

console.log(4/0);
console.log('string'*9);

let something;
console.log(something);

let person = {   // Объект
    name: "John",
    age: 25,
    isMarried: true
};

console.log(person.isMarried);

console.log(person["name"]);

let arr = ['plu.png', 'orange.jpg', 'apple.bmp']; // МАссив

console.log(arr[0]);

//alert("Hello world");

//let answer = confirm("Are you GAY?");

//console.log(answer);

// let answer = +prompt("Arу you 18+?","Yaaaas", "");

// console.log(typeof(answer));

// console.log(typeof(arr));

// console.log("arr" + " - obejct");
// console.log(4 + + " - obejct");

let incr = 10, 
decr = 10;


console.log(incr++);
console.log(decr--);

console.log(5%2);

console.log("2"=== 2); // == сравнивает по значению .. === сравнение по типу данных

let isChecked = false, 
isClose = false;

console.log(isChecked && isClose);

console.log(isChecked || isClose);