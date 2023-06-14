// Приведение к булю на примере Boolean(value)

// console.log(Boolean(5));
// console.log(Boolean(0));
// console.log(Boolean(null));
// console.log(Boolean(''));

// Логическре И(оператор &&)
//     - Запинается на лжи
//     - Возвращает то, на чем запнулось или последний операнд

// console.log(5 && 6 && 3 && 'hello');
// console.log(0 && 6 && 3 && 'hello');
  
// Логическое ИЛИ(оператор ||)
// Запинается на правде\Возвращает то, на чем запнулось или последний операнд

// console.log(5 || 7 || 8 || 10);
// console.log(5 || 7 || 0 || 10);
// console.log(false || 0 || "" || 10);
// Логическое НЕ(оператор!)
// Делает иверсию правда > ложь и ложь > правда

// console.log(!5);
// console.log(!false);
// console.log(!0);
// console.log(!true);

// ЦИКЛЫ

for (let i = 0; i <= 20; i += 5) {
  console.log(i);
}

const target = 3;
let sum = 0;

for (let i = 0; i <= target; i += 1) {
  sum += i;
}

console.log(sum);

const max = 10;
for (let i = 0; i < max; i += 1) {
  console.log(`${max} % ${i} = `, max % i);
}

for (let i = 0; i <= 5; i += 1) {
  console.log(i);

  if (i === 3) {
    console.log("Нашли число 3, прерываем выполнение цикла");
    break;
  }
}

console.log("Лог после цикла");

const number = 10;

for (let i = 0; i < number; i += 1) {
  if (i % 2 === 0) {
    continue;
  }

  console.log("Нечетное i: ", i); // 1, 3, 5, 7, 9
}