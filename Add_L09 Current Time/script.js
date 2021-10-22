'use strict'

const today = new Date()
let weekOutput = document.getElementById('week')
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] 
let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'] 


//добавление нулей к числам первого порядка 
const pad = function(s) { return (s < 10) ? '0' + s : s; }

//довавление правильного склонения
const tDecl = function(value, word) {
    
    let w = ''
    if(word === 'час') {
      w = ['час', 'часа', 'часов']
    } else if(word === 'мин') {
      w = [ 'минута', 'минуты', 'минут']
    } else if(word === 'сек') {
      w = [ 'секунда', 'секунды', 'секунд']
    };


    const num = value % 10
    if( value > 10 && value < 20 ) return pad(value) + ' ' + w[2];
    if( num >= 2 && num <= 4 ) return pad(value) + ' ' + w[1];
    if(num === 1) return pad(value) + ' ' + w[0];
    
    return pad(value) + ' ' + w[2];
}

//Вывод даты в формате 'Сегодня Вторник, 4 февраля 2020 года, 21 час 5 минут 33 секунды'
const convertDate1 = function(d) {
  let day = '';
  let month = '';

  for (let i = 0; i < 7; i++) {
    if(d.getDay() === i + 1) {
      day = week[i]
    }
  }

  for (let i = 0; i < 12; i++) {
    if(d.getMonth() === i) {
      month = months[i]
    } 
  }

  return ['Сегодня', day].join(' ') + ', ' 
        + [pad(d.getDate()),month,d.getFullYear()].join(' ') + ', ' 
        + [tDecl(d.getHours(), 'час'), tDecl(d.getMinutes(), 'мин'), tDecl(d.getSeconds(), 'сек')].join(' ') + '<br>'
}

//Вывод даты в формате '04.02.2020 - 21:05:33'
const convertDate2 = function(d) {  
  return [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':') + ' - ' 
        + [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.') + '<br>'
}

weekOutput.innerHTML = convertDate1(today) 
weekOutput.innerHTML += convertDate2(today)

setInterval(function() { 
  location.reload() 
}, 1000)

