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

  console.log(this.selector[0]);

  if(this.selector[0] === '.') {
    newElem.classList.add(this.selector);

  } else if (this.selector[0] === '#') {
    newElem.setAttribute('id', this.selector);

  } else {
    console.log('why...');
    document.body.innerText = "Не удалось создать элемент"; //!!!!!!
  }

  newElem.style.cssText = `height: ${this.height};
                           width: ${this.width};
                           background-color: ${this.bg};
                           font-size: ${this.fontSize}; 
                           margin: auto;`;
  
  return newElem;
};

const elem1 = new DomElement('#block', '250px', '450px', '#f2d335', '35px');
const elem2 = new DomElement('.block', '250px', '450px', '#f2d335', '35px');
const newEl1 = elem1.createElemOnPage('div');
const newEl2 = elem2.createElemOnPage('div');

console.log(newEl1);
console.log(newEl2);

document.body.append(newEl1);
newEl1.textContent = 'Этот прямоугольник появился здесь чтобы пожелать здоровья:)';
newEl1.style.textAlign = 'center';
newEl1.innerHTML += '<br><img src="vzhuh.png" height = "90px" width = "90px">';
