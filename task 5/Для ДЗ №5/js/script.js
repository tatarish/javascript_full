'use strict';

/* создаем элемент li с классом menu-item */
let itemFive = document.createElement('li'); 
    itemFive.className = "menu-item";

/* добавляем новый элемент в конец объекта с классом menu */
let menu = document.querySelector('.menu');
    menu.appendChild(itemFive);

/* получаем значения пунктов списка и создаем массив слов для новой нумерации списка */
let menuList = document.getElementsByClassName('menu-item');
let arrWords = ['Первый','Второй','Третий','Четвертый','Пятый'];

/* маппим старый список и новый */
for (let i = 0; i < menuList.length; i++){

    let newText = arrWords[i];
    menuList[i].innerText = newText + ' пункт';
}

/* заменяем фон страницы */
document.body.style.backgroundImage = "url('img/apple_true.jpg')";

/* заменяем текст */
let title = document.querySelector('.title');
    title.innerText = 'Мы продаем только подлинную технику Apple';

/* удаляем предварительную рекламу */
let adv = document.querySelector('.adv');
adv.remove();    

/* спрашиваем отношение к Apple */
let answer = prompt('Ваше отношение к Aplle?');
document.getElementById('prompt').innerText = answer;