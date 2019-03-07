'use strict'

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value'),
    levelValue = document.getElementsByClassName('level-value'),
    expenseValue = document.getElementsByClassName('expenses-value'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value'),
    incomeValue = document.getElementsByClassName('income-value'),
    monthSavingsValue = document.getElementsByClassName('monthsavings-value'),
    yearSavingsValue = document.getElementsByClassName('yearsavings-value'),
    checkbox = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelectorAll('.year-value'),
    month = document.querySelectorAll('.month-value'),
    day = document.querySelectorAll('.day-value'),
    choose = document.querySelector('.choose-income'),
    
    buttons = document.getElementsByTagName('button'),
    accept1 = document.querySelector('.expenses-item-btn'),
    accept2 = document.querySelector('.optionalexpenses-btn'),
    count = document.querySelector('.count-budget-btn');
