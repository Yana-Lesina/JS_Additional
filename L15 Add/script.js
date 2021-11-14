'use strict';

const DomElement = function(selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
};

DomElement.prototype.createHtmlElem = function(elemType) {
  const newElem = document.createElement(elemType);

  if(this.selector[0] === '.') {
    newElem.classList.add(this.selector.slice(1));

  } else if (this.selector[0] === '#') {
    newElem.setAttribute('id', this.selector.slice(1));

  } else {
    document.body.innerText = "Не удалось создать элемент";
  }

  newElem.style.cssText = `height: ${this.height};
                           width: ${this.width};
                           background-color: ${this.bg};
                           font-size: ${this.fontSize};
                           position: ${this.position}`;
  
  return newElem;
};


const elem1 = new DomElement('#block', '100px', '100px', '#f2d335', '14px', 'absolute');
let newEl1 = elem1.createHtmlElem('div');

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  //newEl1 = elem1.createElemOnPage('div');
  document.body.append(newEl1);
  newEl1.textContent = 'ヽ(￣～￣　)ノ';
  console.log(newEl1);

  document.addEventListener('keydown', move);

})

const move = function(e) {
  console.log(e.code);
  switch (e.code) {
    case 'ArrowUp':
      //console.log(`top: ${newEl1.style.top} bottom: ${newEl1.style.bottom}`);
      newEl1.style.top = (parseInt(newEl1.style.top) || 0) - 10 + 'px'

      break;
    case 'ArrowDown':
      //console.log(`top: ${newEl1.style.top} bottom: ${newEl1.style.bottom}`);
      newEl1.style.top = (parseInt(newEl1.style.top) || 0) + 10 + 'px'

      break;
    case 'ArrowLeft':
      newEl1.style.left = (parseInt(newEl1.style.left) || 0) - 10 + 'px'
      break;
    case 'ArrowRight':
      newEl1.style.left = (parseInt(newEl1.style.left) || 0) + 10 + 'px'
      break;
  
    default:
      break;
  }
}