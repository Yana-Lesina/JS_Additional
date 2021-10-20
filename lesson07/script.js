'use strict'

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'] 
let weekOutput = document.getElementById('week')
const today = new Date();

for (let i = 0; i < 7; i++) {

  if(i + 1 == today.getDay()) {
    week[i] = '<b>' + week[i] + '</b>'
  }

  if(i == 5 || i == 6) {
    weekOutput.innerHTML += '<i>' + week[i] + '</i>' + '<br>'
  } else {
    weekOutput.innerHTML += week[i] + '<br>'
  }
}