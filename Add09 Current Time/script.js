'use strict'

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] 
let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'серьября', 'октября', 'ноября', 'декабря'] 
const today = new Date()
let weekOutput = document.getElementById('week')

const pad = function(s) { return (s < 10) ? '0' + s : s; }

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

  return ['Сегодня',day].join(' ') + ', ' + [pad(d.getDate()),month,d.getFullYear()].join(' ') + ', '
}


const convertDate2 = function(d) {  
  return [pad(d.getHours()), pad(d.getMinutes()), pad(d.getSeconds())].join(':') + ' ' + [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('.')  
}

weekOutput.innerHTML = convertDate1(today) + '<br>'
weekOutput.innerHTML += convertDate2(today)

setInterval(function() {
  location.reload() 
}, 1000)

