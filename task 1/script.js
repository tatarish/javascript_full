'use strict';

let money    = prompt("Ваш бюджет на месяц?");
let time     = prompt("Введите дату в формате YYYY-MM-DD");
let expensesItem;
let expensesAmount;
let appData  = new Object();
let expenses = new Object();
let numberOfQuestions = 2;
let costs = 0;
let numberOfDays = 30;

for (let i = 0; i < numberOfQuestions; i++) {
    expensesItem    = prompt("Введите обязательную статью расходов в этом месяце");
    expensesAmount  = prompt("Во сколько обойдется?");
    expenses[expensesItem] = Number(expensesAmount);
}

for (let key in expenses) {
    costs += expenses[key];
}

appData.bugdet = money;
appData.timeData = time;
appData.expenses = {};
appData.optionalExpenses = null;
appData.income = null;
appData.savings = false;

alert(costs/numberOfDays);