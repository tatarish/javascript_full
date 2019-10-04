'use strict';

/* Получить кнопку "Начать расчет" через id */
let btn = document.getElementById('start');

/* Получить все блоки в правой части программы через классы */
let elements = document.querySelector('.result-table');

for (var i = 0; i < elements.childNodes.length; i++) {

    let elem = elements.childNodes[i].className;

    if (!(elem == null)) {
        if (elem.indexOf('-value') > 0) console.log(elements.childNodes[i]); 
    }            
}

/* Получить поля(input) c обязательными расходами через класс */
let expensesItems = document.getElementsByClassName('expenses-item');

/*  Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной */
let btn0 = document.getElementsByTagName('button')[0];
let btn2 = document.getElementsByTagName('button')[2];

/*Получить поля для ввода необязательных расходов */
let optExpensesItems = document.querySelectorAll('.optionalexpenses-item');

/*Получить поля для ввода оставшиеся */
let item1 = document.querySelector('.daybudget');


console.log(item1);
