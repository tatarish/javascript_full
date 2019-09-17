'use strict';

let money    = +prompt("Ваш бюджет на месяц?");
let time     = prompt("Введите дату в формате YYYY-MM-DD");
let expensesItem;
let expensesAmount;
let appData  = new Object();
let expenses = new Object();
let numberOfQuestions = 2;
let costs = 0;
let numberOfDays = 30;

console.log("Start!");

startIteration:
 for (let i = 0; i < numberOfQuestions; i++) {
    
    expensesItem    = prompt("Введите обязательную статью расходов в этом месяце");
    expensesAmount  = prompt("Во сколько обойдется?");

    if(typeof(expensesItem) === 'string' && typeof(expensesItem) != null && typeof(expensesAmount) != null
       && expensesItem != '' && expensesAmount != '' && expensesItem.length < 50) {
        
        console.log("Верные типы данных!");
        expenses[expensesItem] = Number(expensesAmount);

    } else {
        console.log("Неверные типы данных! Зададим вопросы еще раз.");
       i--;
        continue startIteration;
    }
    
};

/* let i = 0;
startIteration:
while (i < numberOfQuestions) {
    expensesItem    = prompt("Введите обязательную статью расходов в этом месяце");
    expensesAmount  = prompt("Во сколько обойдется?");

    if(typeof(expensesItem) === 'string' && typeof(expensesItem) != null && typeof(expensesAmount) != null
       && expensesItem != '' && expensesAmount != '' && expensesItem.length < 50) {
        
        console.log("Верные типы данных!");
        expenses[expensesItem] = Number(expensesAmount);
        i++;

    } else {
        console.log("Неверные типы данных! Зададим вопросы еще раз.");
        continue startIteration;
    }
} */

/* let i = 0;
startIteration:
do  {
    expensesItem    = prompt("Введите обязательную статью расходов в этом месяце");
    expensesAmount  = prompt("Во сколько обойдется?");

    if(typeof(expensesItem) === 'string' && typeof(expensesItem) != null && typeof(expensesAmount) != null
       && expensesItem != '' && expensesAmount != '' && expensesItem.length < 50) {
        
        console.log("Верные типы данных!");
        expenses[expensesItem] = Number(expensesAmount);
        i++;

    } else {
        console.log("Неверные типы данных! Зададим вопросы еще раз.");
        continue startIteration;
    }
 } while (i < numberOfQuestions); */

for (let key in expenses) costs += expenses[key];

appData.bugdet           = money;
appData.timeData         = time;
appData.expenses         = {};
appData.optionalExpenses = null;
appData.income           = null;
appData.savings          = false;
appData.moneyPerDay      = costs/numberOfDays;

alert("Ежедневный бюджет: " + appData.moneyPerDay);
console.log("Finish!");

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень");
} else {
    console.log("Произошла ошибка");
}