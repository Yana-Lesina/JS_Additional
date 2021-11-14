// 'use strict'

const greeting = document.getElementById('greeting')
const currentDay = document.getElementById('current-day')
const currentTime = document.getElementById('current-time')
const tillNewYear = document.getElementById('till-New-Year')

let runTimer; 

const zero = (num) => { return num < 10 ? '0' + num : num}

const chooseGreeting = (day) => {
  if(day.getHours() >= 6 && day.getHours() < 12) {
    return 'Доброе утро!'
  } else if (day.getHours() >= 12 && day.getHours() < 18) {
    return 'Добрый день!'
  } else if (day.getHours() >= 18 && day.getHours() <= 23) {
    return 'Добрый вечер!'
  } else if (day.getHours() >= 0 && day.getHours() < 6) {
     return 'Доброй ночи!'
  }
}

const updateTime = () => {
  const today = new Date()
  const newYear = new Date(2022, 00, 01)

  const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  // timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
  }

  const greeting = chooseGreeting(today)

  const dateStr = today.toLocaleString("ru", options)//запись даты в строку определённого формата
  const wordLength = dateStr.indexOf(',') //считаем кол-во символов, к-е занимает день недели
  let weekDay = dateStr.slice(0, wordLength)//вырезаем день недели
  weekDay = weekDay[0].toUpperCase() + weekDay.slice(1);//преобразуем в запись с большой буквы
  
  const currentTime = [zero(today.getHours()), zero(today.getMinutes()), zero(today.getSeconds())].join(':');

  const daysDiff = (newYear.getTime() - today.getTime()) / 1000
  const remain = Math.floor(daysDiff / 60 / 60 / 24)


  return {greeting, weekDay, currentTime, remain};
}

const printDate = () => {
  const obj = updateTime()

  greeting.textContent = obj.greeting

  currentDay.textContent = obj.weekDay
  currentTime.textContent = obj.currentTime
  tillNewYear.textContent = `${obj.remain} дней`
}

runTimer = setInterval(printDate, 1000);



