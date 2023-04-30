// Приведение к булю на примере Boolean(value)

console.log(Boolean(5));
console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(''));

// Логическре И(оператор &&)
//     - Запинается на лжи
//     - Возвращает то, на чем запнулось или последний операнд

console.log(5 && 6 && 3 && 'hello');
console.log(0 && 6 && 3 && 'hello');  
  
// Логическое ИЛИ(оператор ||)
// Запинается на правде\Возвращает то, на чем запнулось или последний операнд

console.log(5 || 7 || 8 || 10);
console.log(5 || 7 || 0 || 10);
console.log(false || 0 || "" || 10);
// Логическое НЕ(оператор!)
// Делает иверсию правда > ложь и ложь > правда

console.log(!5);
console.log(!false);
console.log(!0);
console.log(!true);