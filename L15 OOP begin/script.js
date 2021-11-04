'use strict'

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
    newElem.classList.add(this.selector);

  } else if (this.selector === '#') {
    newElem.setAttribute('id', this.selector);

  } else {
    console.log('why...');
    document.body.innerText = "Не удалось создать элемент"; //!!!!!!
  }

  newElem.style.cssText = 'height:' + this.height + ';' +
                          'width:' + this.width + ';' +
                          'background-color:' + this.bg + ';' +
                          'font-size:' + this.fontSize + ';' + 
                          'margin: auto';
  
  return newElem;
};

const elem = new DomElement('#block', '250px', '450px', '#f2d335', '35px');
const newEl = elem.createElemOnPage('div');

document.body.append(newEl);
newEl.textContent = 'Этот прямоугольник появился здесь чтобы пожелать здоровья:)';
newEl.style.textAlign = 'center';
newEl.innerHTML += '<br><img src="vzhuh.png" height = "90px" width = "90px">';
