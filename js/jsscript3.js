// Парс числа с Number.parseInt() Number.parseFloat()

// let elementWidth = '50px';
// const result = Number.parseInt(elementWidth);
// console.log(result);

let elementWidth = '50px';
elementWidth = Number.parseInt(elementWidth);
console.log('elementWidth:', elementWidth);

let elementHeight = '200.74px';
elementHeight = Number.parseFloat(elementHeight );
console.log('elementHeight:', elementHeight);

// Метод число .toFixed(digits)

// let salary = 1300.16472;
// salary = salary.toFixed(2);
// salary = Number(salary);
// console.log(salary);

// Матрешки на примере console.log(Number(число.toFixed(digits)));
let salary = 1300.16472;
salary = Number(salary.toFixed(2));
console.log(salary);
console.log(Number(salary.toFixed(2)));

// Приведение(преобразование) к числу с Number(value)
// Nall (Not a Number) и метод Number.isNall(value)
let quantity = '30';
let value = 'Эту строку невозможно привести к числу';
console.log(Number(quantity));
console.log(Number (value));

// Обьект Math
//     - возведение в степень
//     - Exponent operator
// const base = 2;
// const power = 5;
// const result = Math.pow(base, power);
// console.log(result);
// - Exponent operator
// console.log(2 ** 5);
// console.log(base ** power);

// Напиши скрипт которій просит пользователя ввести число и степень,
//     возводит число в єту степень и выводит результат в консоль

// План:
// 1.попрость ввести число и сохранить в переменную
// let base = prompt('Давай число');
// base = Number(base);
// console.log(base);
// 2. попросить ввести степень и сохранить в переменную.
// let power = prompt('Введи степень');
// power = Number(power);
// console.log(power);
// 3. Возвести введенные данные в степень и вывести в консоль  
// const result = base ** power;
// console.log(result);

// Генерим псевдослучайные числа
//     - Math.random()
//     - Math.round()
const max = 10;
const min = 5;
const result = Math.round(Math.random() * (max - min) + min);
console.log(result);

// ПРИМЕР

// const colors = ['tomato', 'red', 'teal'];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;
