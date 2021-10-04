let num = 266219;//создание числовой переменной
console.log(typeof num);//проверка типа данных
console.log(num);//вывод числа

let numStr = String(num);//явное преобразование числа в строку функцией String ()
console.log(typeof numStr);//проверка типа данных
console.log(numStr);//вывод строки 


let mult = 1;//переменная результата умножения

for (let i = 0; i < numStr.length; i++) {

  mult *= numStr[i];
  console.log(numStr[i]);

}


console.log('Результат умножения: ' + mult);
console.log('Результат возведения в степень: ' + mult**3);

let multStr = String(mult);// преобразование числа в строку 
console.log('Первые 2 цифры: ' + multStr.substr(0,2));
