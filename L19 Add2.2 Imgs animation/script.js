'use strict'

const dinoContainer = document.querySelector('.Dino-container');
const meteorContainer = document.querySelector('.meteor-container');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

let interv;
let counter = 0;

const dinoPlacement = () => {
  dinoContainer.style.cssText = `padding-top: ${( document.body.clientHeight/3 ) * 2 }px;`
}

const startMeteorFall = () => {
  startBtn.style.display = 'none'
  stopBtn.style.display = 'inline-block'

  if(dinoContainer.getBoundingClientRect().right <= document.body.offsetWidth && meteorContainer.getBoundingClientRect().bottom < dinoContainer.getBoundingClientRect().bottom) {
    interv = requestAnimationFrame(startMeteorFall);
    counter ++
    dinoContainer.style.marginLeft = `${counter * 8}px`

    meteorContainer.style.left = `${counter * 5}px`
    meteorContainer.style.top = `${counter * 3}px`
  } else {
    stopBtn.style.display = 'none'
    resetBtn.style.display = 'inline-block'
  }
}

const stopMeteorFall = () => {
  stopBtn.style.display = 'none'
  startBtn.style.display = 'inline-block'

  cancelAnimationFrame(interv)
}

startBtn.addEventListener('click', startMeteorFall)
resetBtn.addEventListener('click', () => {
  resetBtn.style.display = 'none'
  startBtn.style.display = 'inline-block'
  
  counter = 0

  dinoContainer.style.marginLeft = `${counter * 8}px`;
  meteorContainer.style.left = `${counter * 5}px`;
  meteorContainer.style.top = `${counter * 3}px`;
});

stopBtn.addEventListener('click', stopMeteorFall);

dinoPlacement();
window.addEventListener('resize', () => {
  dinoPlacement();
})
