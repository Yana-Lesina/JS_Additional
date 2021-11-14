'use strict';

const DomElement = function(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
};

DomElement.prototype.createElemOnPage = function(elemType) {
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
                           margin: auto;`;
  
  return newElem;
};

//ArrowRight
//ArrowLeft
//ArrowUp
//ArrowDown

const move = function(e) {
  //console.log('move');
  console.log(e.code);
  switch (e.code) {
    case 'ArrowUp':
      
      break;
    case 'ArrowDown':
      
      break;
    case 'ArrowLeft':
      
      break;
    case 'ArrowRight':
      
      break;
  
    default:
      break;
  }

}


const elem1 = new DomElement('#block', '100px', '100px', '#f2d335', '35px');
elem1.position = 'absolute';
console.log(elem1);

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded");

  const newEl1 = elem1.createElemOnPage('div');
  document.body.append(newEl1);
  newEl1.textContent = ':)';

  console.log(newEl1);

  document.addEventListener('keydown', move);

})

