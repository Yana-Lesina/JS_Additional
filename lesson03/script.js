'use strict';

let lang = prompt('ru or eng?');

//КОНСТРУКЦИЯ IF
if(lang == 'ru') {
  console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');

} else if (lang == 'eng') {
  console.log('Mon, Tue, Wed, Thu, Fri, Sat, Sun');

} else {
  console.log('Неправильный ввод');
}

//КОНСТРУКЦИЯ SWITCH 
switch(lang) {
  case 'ru':
    console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');
    break;

  case 'eng':
    console.log('Mon, Tue, Wed, Thu, Fri, Sat, Sun');
    break;

  default:
    console.log('Неправильный ввод');
}

//МНОГОМЕРНЫЙ МАССИВ 
const weekArray = [['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'], ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']];

lang === 'ru' ? console.log(weekArray[0]) : console.log(weekArray[1]) //тернарный оператор

lang=='ru' && console.log(weekArray[0])//замыкание
lang=='eng' && console.log(weekArray[1])

//================================================
//ЗАДАНИЕ 2

let namePerson = prompt('Как Вас зовут?')

namePerson === 'Артём' ? console.log('Вы директор!') : namePerson === 'Александр' ? console.log('Вы преподаватель!') : console.log('Вы студент!')