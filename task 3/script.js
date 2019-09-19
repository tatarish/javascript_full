'use strict';
let money;
let time;
let expensesItem;
let expensesAmount;
let appData  = new Object();
let expenses = new Object();
let optionalExpenses = new Object();
let numberOfQuestions = 2;
let costs = 0;
let numberOfDays = 30;

function start() {
    money    = +prompt("Ваш бюджет на месяц?");
    time     = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null){
        money    = +prompt("Ваш бюджет на месяц?");
    }
}

start();

function chooseExpenses(){

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
        }
        
    }

}
 
chooseExpenses();

for (let key in expenses) costs += expenses[key];

appData.bugdet           = money;
appData.timeData         = time;
appData.expenses         = {};
appData.optionalExpenses = null;
appData.income           = null;
appData.savings          = true;

function detectDayBudget(){
    appData.moneyPerDay      = (costs/numberOfDays).toFixed();
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel (){
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень");
    } else {
        console.log("Произошла ошибка");
    }
}

detectLevel();

function checkSavings () {

    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент?");

        appData.monthIncome = save/100/12*percent;
        alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }

}

checkSavings();

function chooseOptExpenses(){
    for(let i = 1; i < 4; i++){
        let optItems = prompt("Статья необязательных расходов?");
        optionalExpenses[i] = optItems;
        console.log(optionalExpenses[i]);
    }
}

//chooseOptExpenses();