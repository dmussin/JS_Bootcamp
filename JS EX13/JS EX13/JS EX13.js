// btn.addEventListener('click', function(){
//     alert('что-то произошло');
// });


// let func1 = function(param, func2){
//     func2(function(param, func3){
//         func3(function(param, func4){
//           func4(function(param, func5){

//           })
//         })
//     })
// }

//===================================================
// let drink = 0;

// function shoot(arrow, headshot, fail) {
//     console.log("Вы сделали выстрел...");

//     setTimeout(function(){
//         Math.random() > .5 ? headshot({}) : fail("Вы промахнулись");
//     }, 3000)
// };

// function win() {
//     console.log('Вы победили');
//     (drink == 1) ? buyBeer() : giveMoney();
// }

// function buyBeer() {
//     console.log('Вам купили пива');
// }

// function giveMoney(){
//     console.log('Вам дали денег');
// }

// function lose() {
//     console.log('Вы проиграли');
// }

// shoot({}, 
//     function(mark) {
//         console.log('Вы попали в цель');
//         win(mark, buyBeer, giveMoney);
//     }, 
//     function(miss) {
//         console.log(miss);
//         lose();
//     }
//     )
// PROMISSES ---=======================

let drink = 0;

function shoot(arrow) {
    console.log("Вы сделали выстрел...");
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000)
    });

    return promise;
};

function win() {
    console.log('Вы победили');
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log('Вам купили пива');
}

function giveMoney(){
    console.log('Вам дали денег');
}

function lose() {
    console.log('Вы проиграли');
}

shoot({})
        .then(mark => console.log('Вы попали в цель'))
        .then(win)
        .catch(lose)
        