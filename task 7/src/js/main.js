'use strict';
let money;
let time;
let expensesItem;
let expensesAmount;
let numberOfQuestions = 2;
let budget = 0;
let numberOfDays = 30;
let expenses = new Object();

function start() {

    time     = prompt("Введите дату в формате YYYY-MM-DD", '');
    money    = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null){
        money    = +prompt("Ваш бюджет на месяц?");
    }
}

let appData  = {
    budget           : money,
    timeData         : time,
    expenses         : {},
    expensesTotal    : 0,
    optionalExpenses : new Object(),
    income           : [],
    savings          : false
};


let startBtn    = document.getElementById('start'),
    budgetValue = document.querySelector('.budget-value'),
    yearValue   = document.querySelector('.year-value'),
    monthValue  = document.querySelector('.month-value'),
    dayValue    = document.querySelector('.day-value'),
    expensesBtn = document.querySelector('.expenses-item-btn'),
    expensesItem2 = document.getElementsByClassName('expenses-item'),
    expensesValue = document.querySelector('.expenses-value'),
    optionalExpensesBtn = document.querySelectorAll('button')[1],
    optionalExpensesItem = document.getElementsByClassName('optionalexpenses-item'),
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    countBtn = document.querySelector('.count-budget-btn'),
    dayBudgetValue = document.querySelector('.daybudget-value'),
    levelValue = document.querySelector('.level-value'),
    incomeItem = document.querySelector('.choose-income'),
    incomeValue = document.querySelector('.income-value'),
    checkSavings = document.getElementById('savings'),
    sumValue     = document.querySelector('.choose-sum'),
    percentValue     = document.querySelector('.choose-percent'),
    monthSavingsValue = document.querySelector('.monthsavings-value'),
    yearSavingsValue = document.querySelector('.yearsavings-value');


    expensesBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    countBtn.disabled = true;

startBtn.addEventListener('click', function(){
    time     = prompt("Введите дату в формате YYYY-MM-DD", '');
    money    = +prompt("Ваш бюджет на месяц?", '');

    while(isNaN(money) || money == "" || money == null){
        money    = +prompt("Ваш бюджет на месяц?");
    }

    appData.budget   = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();

    expensesBtn.disabled = false;
    optionalExpensesBtn.disabled = false;
    countBtn.disabled = false;

});

expensesBtn.addEventListener('click', function(){

    let sum = 0;

    for (let i = 0; i < expensesItem2.length; i++) {
        
            let a  = expensesItem2[i].value;
            let b  = expensesItem2[++i].value;
        
            if(typeof(a) != null && typeof(b) != null
               && a != '' && b != '' && a.length < 50) {
                
                console.log("Верные типы данных!");
                appData.expenses[a] = Number(b);
                sum += Number(b);
                console.log(sum);

            } else {
                console.log("Неверные типы данных! Зададим вопросы еще раз.");
            i--;
        }   
    }

    expensesValue.textContent = sum;
    appData.expensesTotal     = sum;
});

optionalExpensesBtn.addEventListener('click', function() {

    for(let i = 0; i < optionalExpensesItem.length; i++){

        let opt = optionalExpensesItem[i].value;        
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' '; 

    }

});

countBtn.addEventListener('click', function(){

    if(appData.budget != undefined) {
 
        appData.moneyPerDay      = ((appData.budget - appData.expensesTotal)/numberOfDays).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;

        if(appData.moneyPerDay < 100) {
            levelValue.textContent = "Минимальный уровень";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "Средний уровень";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Высокий уровень";
        } else {
            levelValue.textContent = "Произошла ошибка";
        }
    } else {
        dayBudgetValue.textContent = "Произошла ошибка";
    }

});

incomeItem.addEventListener('input', function() {

    let items      = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;

});

checkSavings.addEventListener('click', function(){
    if(appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }

    console.log(appData.savings);
});

sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum     = +sumValue.value,
            percent = + percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent  = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        let sum     = +sumValue.value,
            percent = + percentValue.value;

        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;

        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent  = appData.yearIncome.toFixed(1);
    }
});