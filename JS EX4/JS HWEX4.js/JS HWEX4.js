'use strict';

let money, time; 

function start() {

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "" );
    }

    time = prompt("Введите дату в формате YYYY-MM-DD", "");
}

start(); 


let appData = {
    budget: money, 
    timeData: time, 
    expenses: {}, 
    optionalExpenses: {}, 
    income: [], 
    saving: true, 
    chooseExpenses: function (){
        for (let i = 0; i < 2; i ++){
            let a=prompt("Введите обязательную статью расходов в этом месяце",""),
             b=prompt("Во сколько это обойдется?","");
          
             if ((typeof(a))=== 'string' && (typeof(a))!= null && (typeof(b))!= null
             && a != '' && b != '' && a.length < 50){
                 console.log("done");
             appData.expenses[a] = b;
          } else {
          i = i --;
          }
        }
    }, 

    detectDayBudget: function(){
            appData.moneyPerDay = (appData.budget / 30).toFixed(1);
            alert("Ваш бюджет на 1 день: " + appData.moneyPerDay);
    }, 

    detectLevel: function(){
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
            } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000){
            console.log("Средний уровень достатка");
            } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
            } else {
            console.log("Произошла ошибка");
            }   
    }, 

    checkSavings: function(){
        if (appData.saving == true) {
            let save = +prompt("Кавова сумма накоплений?"), 
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = (save/100/12*percent);
            alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
        }
    }, 

    chooseOptExpenses: function(){
        for (let i = 1; i <3; i++) {
            let opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpenses[i]= opt;
        }
    }, 

    chooseIncome: function(){
      
        for (let i = 0; i < 1; i++ ) {

        let items = prompt('Что принесет допольнительный доход (Перечислите через запятую)', '');

        if ((typeof (items)) === 'string' && items != '' && (typeof (items)) != null) {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то еще?"));
            appData.income.sort(); 
            appData.income.forEach(function(item, i, income) {
                let nr = i + 1;
                console.log(nr + "Способ доп.заработка: " + item);
            });
        } else { 
            i--;
        }
    }
    }

};


for (let key in appData) {
    console.log("Наша программа включает в себя данные: " + key);
}



// function chooseOptExpenses(){
//     for (let i = 0; i < 3; i++){
//         let c=prompt("Статья необязательных расходов?", ""),
//             num = i + 1; 
//         if ((typeof(c))=== 'string' && (typeof(с))!= null
//          && c != '' && c.length < 50){
//              console.log("done");
//         appData.optionalExpenses[num] = c;
//     } else {
//         i = i--;
//     }
// }
// }

// chooseOptExpenses();


