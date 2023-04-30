// Длинна строки

const message = 'В єтой строке 26 символов.';
console.log(message.length);

// Конкатенация строк

const firstName = 'Ihor';
const lastName = 'Marchenko';
const fullName = firstName +' ' +lastName;
console.log(fullName);
console.log('5' + '5');
console.log(5 + 5);


// Напиши скрипт который выведет строку в формате:
// "Гость х у поселяется в z номер q"
// подставив вместо x y z q значения перемнніх
const room = 716;
const type = 'VIP'
// Обічніе строки вариант 1
// const welcomeMsg = 'Гость' + ' ' + fullName + ' ' + "поселяется в " + ' ' + type + ' ' + 'номер' + ' ' + room;
// console.log(welcomeMsg);
// Шаблонные строки ( template strings) вариант 2

const welcomeMsg = `Гость ${firstName} ${lastName} поселяется в ${type} номер ${room}`;

console.log(welcomeMsg);

// Шаблонная строка
const quantity = 15;
const orderMsg = `Вы заказали ${quantity} холодильников.`;
console.log(orderMsg);

// Нормализация с методом toLowerCase()
// Что ищем?

let brand = 'SamsUng';
const normalizeBrend = brand.toLowerCase();
const inDb = 'samsung';
console.log(normalizeBrend);

// Варинат 2
// let brand = 'samSUnG';
// console.log(brand[4]);
// console.log(brand.slice(1).toLowerCase());
// brand = brand[0] + brand.slice(1).toLowerCase();
// console.log(brand);

// Поиск в строке с методом includes()

const blacklistedWord1 = 'спам';
const blacklistedWord2 = 'распродажа';

const string1 = 'Привет, я принц Абдул, это не спам. предлагаю тебе миллион!';
const string2 = 'ПСамая большая РАСПРОДАЖА этой недели, не пропустите!';
const normalizedString2=string2.toLowerCase()
const string3 = 'Рекламная кампания #fatlivesmatter!';

console.log(string1.includes(blacklistedWord1));
console.log(string1.includes(blacklistedWord2));

console.log(string2.includes(blacklistedWord1));
console.log(normalizedString2.includes(blacklistedWord2));

console.log(string3.includes(blacklistedWord1));
console.log(string3.includes(blacklistedWord2));