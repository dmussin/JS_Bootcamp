'use strict';

var time; 
var money;
var expenses;
// var answer1;
// var answer2;

 money = +prompt("Ваш бюджет на месяц?", "" );
 time = prompt("Введите дату в формате YYYY-MM-DD", "");

console.log(money);
console.log(time);

let appData = {budget: money, timeData: time, expenses, optionalExpenses: "", income: "", saving: false};

let answer1 = +prompt("Введите обязательную статью расходов в этом месяце");
console.log(answer1);

let answer2 = +prompt("Во сколько это обойдется?");
console.log(answer1);

let answer3 = +prompt("Введите обязательную статью расходов в этом месяце");
console.log(answer2);

let answer4 = +prompt("Во сколько это обойдется?");
console.log(answer2);

expenses = {answer1 : answer2, answer3: answer4};
console.log(expenses);

alert("Ваш бюджет на 1 день: " + money / 30);