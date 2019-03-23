(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// function User(name, age) {
//     this.name = name;
//     let userAge = age;
//     // this.age = age;

//     this.getAge = function(){
//         return userAge;
//     };
//     this.setAge = function(age){
//         if (typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log("недопустимое значение");
//         }
//     };
//     this.say = function(){
//         console.log(`Имя пользователя ${this.name}, возвраст: ${this.userAge}`);
//     };
// }

// let user = new User('Ivan', 25);
// console.log(user.name);
// console.log(user.userAge);
// user.say(); 
// console.log(user.getAge());
// user.setAge('30');
// console.log(user.getAge());

// user.age = 30;
// user.name = 'Alex';
// user.say();
// user.getAge();


// EX 2 

// let app = {
//     data: 45
// };

// console.log(app); 

// EX3 

// let number = 1;

// (function(){
//     let number = 2;
//     console.log(number);

//     return console.log(number + 3);
// }());

// console.log(number);

// 4 

let user = (function(){
    let privat = function(){
        console.log('I am privat');
    }

    return {
        sayHello: function(){
          console.log('Hello!'); 
        }
    };
}());

console.log(user);
console.log(user.sayHello());
},{}],2:[function(require,module,exports){
let myModule = require('./JS EX16');

let myModuleTest = new myModule();
myModuleTest.hello();
myModuleTest.goodbye();
},{"./JS EX16":1}]},{},[2]);
