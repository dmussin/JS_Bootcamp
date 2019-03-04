'use strict';

let money, time; 

function start() {

    money = +prompt("Ваш бюджет на месяц?", "" );
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "" );
    }

}

start(); 


console.log(money);
console.log(time);

let appData = {
    budget: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses: {}, 
    income: [], 
    saving: true
};



function choseExpenses() {
    for (let i = 0; i < 2; i ++){
        let a=prompt("Введите обязательную статью расходов в этом месяце",""),
         b=prompt("Во сколько это обойдется?","");
      
         if ((typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null
         && a != '' && b != '' && a.length < 50){
             console.log("done");
         appData.expenses[a] = b;
      } else {
      i = i - 1;
      }
    }
}
choseExpenses();


function chooseOptExpenses(){
    for (let i = 0; i < 3; i++){
        let c=prompt("Статья необязательных расходов?", ""),
            num = i + 1; 
        if ((typeof(c))=== 'string' && (typeof(с))!= null
         && c != '' && c.length < 50){
             console.log("done");
        appData.optionalExpenses[num] = c;
    } else {
        i = i - 1;
    }
}
}

chooseOptExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
}
detectDayBudget();

alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);

function detectLevel() {
    if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
    console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
    } else {
    console.log("Произошла ошибка");
    }
}
detectLevel();

function checkSavings() {
    if (appData.saving == true) {
        let save = +prompt("Кавова сумма накоплений?"), 
            percent = +prompt("Под какой процент?");

        appData.monthIncome = (save/100/12*percent).toFixed();
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();