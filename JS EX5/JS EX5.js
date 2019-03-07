'use strict';

// To string 

// 1)

// console.log(typeof(String(4)));

// // 2) 
// console.log("ww" + "err");
// console.log("ww" + 5);

// console.log("" + false);

// console.log("https://vk.com/catalog/" + 5);


// // Данные в число

// // 1) 
// console.log(typeof(Number("5")));

// // 2) 

// console.log(typeof(5 + +"5"));

// // 3) 
// console.log(typeof(parseInt('15px', 10)));

// let answer = +prompt("hello", "");

// // 0, '', null, undefined, NaN 

// let switcher = null;
// if (switcher) {
//     console.log("Working ....")
// }

// switcher = 1;

// if (switcher) {
//     console.log("Working ....")
// }

// // 2) 
// console.log(typeof(Boolean("5")));

// // 3) 
// console.log(typeof(!!"5"));

// console.log([ ] + false) // "false"

// console.log([ ] + false - null) // NaN

// console.log([ ] + false - null + true) //NaN

// console.log([ ] + 1 + 2) //"12"

// console.log(2 && 1 && null && 0 && undefined);

// console.log("ёжик" > "яблоко")





// let arr=[],
//     arr2=[];

    // for(p=2; p<=100; p++){
    //     arr.push(p);
    // }

    // for(i=0; i<arr.length; i++) {
    //     for(j=0; j< i; j++) {
    //      if(arr[i]%arr[j]== 0) {
    //             break;
    //         } else {
    //             arr2.push(arr[i]);
    //         }
    //     }
    // }

    // console.log(arr2);

//     let arr=[],
//     arr2=[];


// PrimeNumber:
//   for (var num = 2; num <= 100; num++) {

//     for (var num2 = 2; num2 < num; num2++) {
//       if (num % num2 == 0) continue PrimeNumber;
//     }

//     console.log(`\n${num}`); // простое
//   }



//   let arr = ['245', '5678', '458', '355', '325', '789', '4905'];

// arr.forEach((e) => {
//   if (e[0] == '3' || e[0] == '7') {
//     console.log(`\n${e}`);
//   }
// });





// ===================================


let box = document.getElementById("box"),
    circle = document.getElementsByClassName("circle"),
    heart = document.querySelectorAll(".heart"),
    oneheart = document.querySelector(".heart"),
    wrapper = document.querySelector(".wrapper"),
    btn = document.getElementsByTagName("button");

// console.log(box);
// console.log(btn);
// console.log(btn[0]);
// console.log(circle[2]);
// console.log(heart);
// console.log(oneheart);

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i<heart.length; i++) {
//     heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
//     item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'),
    text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.appendChild(div);
// wrapper.appendChild(div);
document.body.insertBefore(div, circle[0]);

document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

console.log(div);

