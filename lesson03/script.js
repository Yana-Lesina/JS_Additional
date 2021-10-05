'use strict';

let lang = prompt('ru or eng?');

if(lang == 'ru') {
  console.log('Пн, Вт, Ср, Чт, Пт, Сб, Вс');

} else if (lang == 'eng') {
  console.log('Mon, Tue, Wed, Thu, Fri, Sat, Sun');

} else {
  console.log('Неправильный ввод');
}


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



