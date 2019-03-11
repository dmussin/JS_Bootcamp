'use strict';

 let money = +prompt("Ваш бюджет на месяц?", "" );
 let time = prompt("Введите дату в формате YYYY-MM-DD", "");

console.log(money);
console.log(time);

let appData = {budget: money, timeData: time, expenses: {}, optionalExpenses: {}, income: [], saving: false};

// let answer1 = +prompt("Введите обязательную статью расходов в этом месяце");
// console.log(answer1);

// let answer2 = +prompt("Во сколько это обойдется?");
// console.log(answer1);

// let answer3 = +prompt("Введите обязательную статью расходов в этом месяце");
// console.log(answer2);

// let answer4 = +prompt("Во сколько это обойдется?");
// console.log(answer2);

// expenses = {answer1 : answer2, answer3: answer4};

// appData.expenses.answer1 = answer2;
// appData.expenses.answer3 = answer4;
// console.log(appData.expenses);


// =================================================
// Цикл For 

for (let i = 0; i < 2; i ++){
  let a=prompt("Введите обязательную статью расходов в этом месяце",""),
   b=prompt("Во сколько это обойдется?","");

   if ((typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null
   && a != '' && b != '' && a.length < 50){
       console.log("done");
   appData.expenses[a] = b;
} else {

}
};

// =================================================
// Цикл Do While 

// let i = 0;

// do {
//     let a=prompt("Введите обязательную статью расходов в этом месяце",""),
//         b=prompt("Во сколько это обойдется?","");
//         i++;

//         if ((typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null
//    && a != '' && b != '' && a.length < 50){
//        console.log("done");
//    appData.expenses[a] = b;
// } else {
// }

// }

// while (i < 2);


// =================================================
// Цикл while 

// let i = 0; 
// while (i < 2) {
//     let a=prompt("Введите обязательную статью расходов в этом месяце",""),
//    b=prompt("Во сколько это обойдется?","");
//    i++;

//    if ((typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null
//    && a != '' && b != '' && a.length < 50){
//        console.log("done");
//    appData.expenses[a] = b;
// } else {
// }
// };
// =================================================

appData.moneyPerDay = appData.budget / 30;

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}