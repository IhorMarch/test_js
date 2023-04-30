// Ввод пользователя
// Методы window.confirm() и window.prompt()


// Хотите продлить подписку?

// Variant1
// const shoulRenew = confirm('Хотите продлить подписку?');
// console.log(shoulRenew);

// Variant 2 
const message="Хотите продлить подписку?"
const shoulRenew = confirm(message);
console.log(shoulRenew);


// Передает строку
// const quantity = prompt('Введите количество товаров');
// console.log(quantity);
// console.log(typeof quantity);

// Передаст номер

let quantity = prompt('Введите количество товаров');
quantity=Number(quantity)
console.log(quantity);
console.log(typeof quantity);

