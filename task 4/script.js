'use strict';
let money;
let time;
let expensesItem;
let expensesAmount;
let optionalExpenses = new Object();
let numberOfQuestions = 2;
let costs = 0;
let numberOfDays = 30;
let expenses = new Object();

function start() {

    while(isNaN(money) || money == "" || money == null){
        money    = +prompt("Ваш бюджет на месяц?");
    }

    time     = prompt("Введите дату в формате YYYY-MM-DD");
}

let appData  = {
    bugdet           : money,
    timeData         : time,
    expenses         : {},
    optionalExpenses : null,
    income           : [],
    savings          : true,
    chooseExpenses: function (){
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
    },
    detectDayBudget: function (){
        for (let key in expenses) costs += expenses[key];

        appData.moneyPerDay      = (costs/numberOfDays).toFixed();

        alert("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    detectLevel: function (){
        if(appData.moneyPerDay < 100) {
            console.log("Минимальный уровень");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень");
        } else {
            console.log("Произошла ошибка");
        }
    },
    checkSavings: function (){

        if(appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент?");
    
            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function (){
        for(let i = 1; i < 4; i++){
            let optItems = prompt("Статья необязательных расходов?");
            optionalExpenses[i] = optItems;
            console.log(optionalExpenses[i]);
        }
    },
    chooseIncome: function (){

        let items;
        while(typeof(items) != 'string' || items == '' || items == null) {
           console.log(items);
           console.log(typeof(items));
           items   = prompt("Что принесет доп. доход? (Перечислите через запятую)", '');
           console.log(items);
           console.log(typeof(items));
        }
                
        appData.income = items.split(', ');
        appData.income.push(prompt("Что-то еще?", ''));
        appData.income.sort();

        let waysExtraMoney = 'Способы доп. заработка: ';
        
        appData.income.forEach(function (item, i, mass){
                let j = i + 1;
                waysExtraMoney = waysExtraMoney + j + '. ' + item + ' ';
        });

        alert(waysExtraMoney);

        console.log('Наша программа включает в себя данные: ');
        for (let key in appData) console.log(key + ':' + appData[key]);
    }
};

start();
appData.chooseExpenses();
appData.detectDayBudget();
appData.chooseIncome();