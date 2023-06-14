// const clients = ["Mango", "Poly", "Ajax"];

// Указывая в скобках индекс элемента мы получаем его значение
// console.log(clients[0]); // Mango
// console.log(clients[1]); // Poly
// console.log(clients[2]); // Ajax

// Длина массива
// console.log(clients.length); // 3

// const clients = ["Mango", "Poly", "Ajax"];
// const lastElementIndex = clients.length - 1;
// console.log(lastElementIndex); // 2
// console.log(clients[lastElementIndex]); // "Ajax"

// const clients = ["Mango", "Ajax", "Poly"];

// Итерация по массиву

// const clients = ["Mango", "Ajax", "Poly"];
// for (let i = 0; i < clients.length; i += 1) {
//   console.log(clients[i]);
// }


// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }

// const string = "javascript";

// for (const character of string) {
//   console.log(character);
// }


// const clients = ["Mango", "Poly", "Ajax"];
// const clientNameToFind = "Poly";
// let message;

// for (const client of clients) {
  // На каждой итерации будем проверять совпадает ли элемент массива с
  // именем клиента. Если совпадает то мы записываем в message сообщение
  // об успехе и делаем break чтобы не искать дальше
//   if (client === clientNameToFind) {
//     message = "Клиент с таким именем есть в базе данных!";
//     break;
//   }

  // Если они не совпадают то запишем в message сообщение об отсутствии имени
//   message = "Клиента с таким именем нету в базе данных!";
// }

// console.log(message); // "Клиент с таким именем есть в базе данных!"

// Присвоение по ссылке и по значению

// const a = ["Mango"];
// Так как a это массив, в b записывается ссылка на уже существующий
// массив в памяти. Теперь a и b указывают на один и тот же массив.
// const b = a;
// console.log(a); // ["Mango"]
// console.log(b); // ["Mango"]

// Изменим массив, добавив еще один элемент, используя указатель из a
// a.push("Poly");
// console.log(a); // ["Mango", "Poly"]

// b также изменилось, потому что b, как и a,
// просто содержит ссылку на одно и то же место в памяти
// console.log(b); // ["Mango", "Poly"]

// Результат повторяется
// b.push("Ajax");
// console.log(a); // ["Mango", "Poly", "Ajax"]
// console.log(b); // ["Mango", "Poly", "Ajax"]


// const array = [1, 2, 3, 4, 5]
// const lastElementIndex = Number(array.length-2 );
// const firstLastElement = array.splice(1,lastElementIndex);
// console.log( array )


// const array = [1, 2, 3, 4, 5]
// function getExtremeElements(array) {
//   // Change code below this line

//   const firstElenent = array[0]
//   const lastElementIndex = array.length - 1;
//   const lastElement = array[lastElementIndex]
//   const firstLastElement = array.splice(1, lastElementIndex);
  
//   return array;
//   // Change code above this line

// }
// console.log( array )

// let message = "JavaScript is in my blood";
// let pricePerWord = 20;
// let totalPrice
// totalPrice = message.split(' ').length*pricePerWord
  
// console.log( totalPrice )
// let title=['Arrays', 'for', 'begginers']
// let slug;
// slug = title.join('-').toLowerCase()
// console.log( slug )

// const firstArray=[1, 2, 4, 5]
// const secondArray=[6, 7, 8]
// const maxLength=5
//     // Change code below this line
// let newArray
// newArray=firstArray.concat(secondArray)


// if (newArray.length < maxLength) { console.log(newArray) }
// else{console.log(newArray.slice(0,maxLength))}

// for (let i = 0; i <= 20; i += 5) {
//   console.log(i);
// }

// const number = 3;
// let sum = 0;


// for (let i = 1; i <= number; i ++)  {
//   sum += i;
//   console.log(sum);
// }

// const target = 3;
// let sum = 0;

// for (let i = 0; i <= number; i += 1) {
//   sum += i;
// }

// console.log(sum);

// const order =[12, 85, 3, 4]
// let total = 0;
// for (let i = 0; i < order.length; i += 1) {
//   total += order[i];
// }
//   console.log(total);


//   let total = 1;

//   for (const argument of arguments) {
//     total *= argument;
//   }

// сonsole.log(total);

// let string = "JavaScript is in my blood";
// let stringArrey = string.split(' ')
// let longestWord = stringArrey[0]

// for (const stringsArrey of stringArrey) {
//   if (stringsArrey.length > longestWord.length) {
//     longestWord = stringsArrey;
//   }
// }
// console.log(longestWord);

// const min = 1;
// const max = 17;

// const numbers = [];


// for (let i = min; i <= max; i += 1) {

//  numbers.push(i);
// }
// console.log(numbers);



// const numbers = [12, 24, 8, 41, 76];
// const value = 38
//  const newNumbers=[]
// for (let i = 0; i < numbers.length; i += 1)
// {
//    if (numbers[i]>value){
//             newNumbers.push(numbers[i])
//         }
// }
//  console.log(newNumbers);

// const array1 =[1, 2, 5]
// const array2 = [2, 5]

// let newArray=[];
// for (let i = 0; i <= array1.length; i += 1)
// {
// if (array2.includes(array1[i]))
//     {newArray.push(array1[i]) }

//  // Change code above this line
// }
// console.log(newArray);

// const clients = ["Mango", "Ajax", "Poly"];

// for (const client of clients) {
//   console.log(client);
// }


// function calculateTotalPrice(order) {
//   let total = 0;
//   // Change code below this line


// for (const numbers of order) {
//   total += order[i];
// }

//   // Change code above this line
//   return total;
// }


// function filterArray(numbers, value) {
//   // Change code below this line
//   const filteredNumbers = [];

//   for (const number of numbers){


//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   }

//   return filteredNumbers;
//   // Change code above this line
// }


// const start = 6
// const end = 12

// getEvenNumbers(start, end)

// function getEvenNumbers(start, end) {
//    // Change code below this line
// const newArrey =[]
//   for (let i = start; i <= end; i+=1){
  
//   if(i%2===0){
//     newArrey.push(i)
//   }}
//   console.log(newArrey);
//   return newArrey
 
//     // Change code above this line
//   }

// function fn() {
//   for (let i = 0; i <= 5; i += 1) {
//     console.log(i);

//     if (i === 3) {
//       console.log("Нашли число 3, делаем возврат, прерывая цикл и функцию");
//       return i;
//     }
//   }

//   // Этот console.log не выполнится
//   console.log("Лог после цикла в теле функции");
// }

// const result = fn();
// console.log("Лог после выхода из функции");
// console.log(`Результат выполнения функции ${result}`);



// const array = ["apple", "plum", "pear", "orange"]
// const value= "plum"



// function includes(array, value) {
  
// for(let i=0; i<array.length; i+=1){
  
//   if(array[i]===value){
    
//     return true
//   }
// }
// return false
// }

// // const result = includes(array, value);
// console.log(includes(array, value));

// const apartment ={
// imgUrl: 'https://via.placeholder.com/640x480;'
// descr:"Spacious apartment in the city center";
// rating :4 ;
// price: 2153 ;
// tags: ["premium", "promoted", "top"].
  
// }

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// Change code below this line
// const ownerName = apartment.owner.name ;
// const ownerPhone = apartment.owner.phone ;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// console.log(numberOfTags)
// const firstTag = apartment.tags[0];
// console.log(firstTag)
// const lastTag = apartment.tags[apartment.tags.length-1]

// Change code above this line

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }

// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];

// const values = [];
// // Change code below this line
// for (const key in apartment){
//   keys.push(key)
//   values.push(apartment[key])
// }
// console.log(keys);
// console.log(values);

// ==========================================
// const object={mail: "poly@mail.com", isOnline: 'true', score: '500',}

// function countProps(object) {
//   let propCount = 0;
 
//   for (const key in object) {
 
//     if (object.hasOwnProperty(key)) { propCount += 1; }
    
//  }
//     return propCount;
  
// }

// console.log(countProps(object));
// // =============================================================
// const someObj = {
//  mail: "poly@mail.com", isOnline: 'true', score: '500'
// }
// const countObjProperties2 = (obj) => {
//     let count = 0;
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) count++;
//     }
//     return count;
// }
// console.log(countObjProperties2(someObj)); // 4
// const someObj = {
//    mail: "poly@mail.com", isOnline: 'true', score: '500',
// }
// const objectLength = Object.keys(someObj).length;
// console.log(objectLength); // 4



// const apartment = {
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
//  console.log(values);
// // Change code below this line
// const keys = Object.keys(apartment);
// const value = Object.values(apartment);

// for (const key of value) {
//  values.push(key)
//  }
  

// const object = { name: "Mango", age: 2 }


// function countProps(object) {
//   // Change code below this line
//   let propCount = 0;
// const keys =Object.keys(object)

//   propCount =Object.keys(object).length

//   return propCount;
//   // Change code above this line
// }
//  console.log(countProps(object));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
// ];

// for (const book of books) {
//   // Объект книги
//   // console.log(book);
//   // Название
//   console.log(book.title);
// //   // Автор
// //   console.log(book.author);
// //   // Рейтинг
// //   console.log(book.rating);
//  }

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line
// // for (const color of colors){
//   // hexColors.push(colors.hex[color])
//   // rgbColors.push(colors.rgb)
// // }
// for (const color of colors) {
//   hexColors.push(color.hex)
//   rgbColors.push(color.rgb)
// }
// console.log(hexColors);

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// let productName = 'Droid'
//   getProductPrice(productName)
// function getProductPrice(productName) {
//   for (const product of products) {
 
   
//     if (productName === product.name) {
//       return product.price
//       console.log(product.price);
//     }
//   }
//   return null
// }
// console.log(getProductPrice(productName))

// const products = [{
//     name: "Radar",
//     price: 1300,
//     quantity: 4
//   },
//   {
//     name: "Scanner",
//     price: 2700,
//     quantity: 3
//   },
//   {
//     name: "Droid",
//     price: 400,
//     quantity: 7
//   },
//   {
//     name: "Grip",
//     price: 1200,
//     quantity: 9
//   },
// ];

// console.log(getAllPropValues('price'))

// function getAllPropValues(propName) {

//   let arrValue = [];

//   for (const product of products) {
//     // console.log(product)

//     for (const obj in product) {
//       // console.log(obj)
//       console.log(product[obj])
//       if (obj == propName) {
//         arrValue.push(product[obj])
//       }
//     }

//   }
//   return arrValue
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// let productName = "Radar";
// let totalPrice = 0;
// // function calculateTotalPrice(productName)

// // function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
  
// for (const product of products) {
//    console.log(product.name)
//     if(productName===product.name)
// {totalPrice = product.price * product.quantity};
// }

//  console.log(totalPrice)
// // return totalPrice


// //   // Пиши код выше этой строки
// // }

// // console.log(getProductPrice(totalPrice))

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Change code below this line
// const { yesterday:highYesterday, today:highToday, tomorrow:highTomorrow, highIcon ="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"} = highTemperatures;

// console.log(highIcon)

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;


// console.log(meanTemperature)

// const colors =
//   [{ hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },];

//   console.log(colors[0])

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//   const { hex, rgb } = color;
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
// console.log(hexColors)


// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//     icon:"https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   },
// };
// // Change code below this line

// const{today: {low:lowToday, high:highToday, icon: todayIcon= "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"},
//       tomorrow: {
//     low:lowTomorrow, high:highTomorrow, icon:tomorrowIcon="https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
//   }}=forecast
// Change code below this line

// const forecast=
// {
//   today: { low: 10, high: 200 },
//   tomorrow: { low: 20, high: 30 }
// }

// function calculateMeanTemperature(forecast) {

//   const{ today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh }}=forecast


//   // Change code above this line
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature(forecast))

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);
// console.log(bestScore)
// console.log(worstScore)


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores)
// console.log(bestScore)
//    console.log(worstScore)

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Change code below this line
// const finalSettings = {...defaultSettings,...overrideSettings};

// const data = {
//   text: "Buy bread",
//   category :"General",
//   priority :"Normal"
// }
// for (const dat of data) {
//   const { text, category, priority } = dat;

//   console.log(text);
//   console.log(category);
//   console.log(priority);
// }

// const data =
// console.log("🚀 ~ file: jsscript7.js:703 ~ data:", data)
// {
//   category: "Finance",
 
//   text: "Take interest"
//   }

// const completed = false;
// const category = "General";
// const priority = "Normal";
  
// function makeTask(data) {
  

//     return { ...{ category, priority, completed }, ...data };

 
// }
// console.log(makeTask({ data }))

// Change code below this line
// function add(...args) {

//   let total = 0;
// for (const arg of args) {
//   total += arg;
// }

// console.log(total); // массив всех аргументов

// return total
//   // Change code above this line
// }

// console.log(add(1, 2));

// Change code below this line
// function addOverNum(firstNum,...args) {
//   let total = 0;

//   for (const arg of args) {
//     if(firstNum <arg){total += arg;}
    
//   }

//   return total;
//   // Change code above this line
// }
// console.log(addOverNum(50, 15, 2));

// Change code below this line
// function findMatches(FirstElement,...args) {
//   const matches = []; // Don't change this line
//   // console.log(args)
//   for (const arg of args) {
//     if (FirstElement.includes(arg)) {
//       matches.push(arg)

//     }
//     console.log(arg)
// }
    
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([1, 2, 3, 4, 5,], 1, 8, 2, 7));

// ✅ Логически и синтаксически сгруппированные сущности

// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Это метод объекта
//   getBooks() {
//     return bookShelf.books
//   },
//   // Это метод объекта
//   addBook(bookName) {
//     return bookName
//   },
// };

// // Вызовы методов
// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Новая книга"));


// const bookShelf = {
//   // Change code below this line
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },

//   updateBook(oldName, newName) {
//      return `Updating book ${oldName} to ${newName}`
// },
//   // Change code above this line
// };


// console.log(bookShelf.getBooks());
// console.log(bookShelf.addBook("Новая книга"));
// console.log(bookShelf.removeBook("The last kingdom"));
// console.log(bookShelf.updateBook("The last kingdom" , "Putin Huylo"));


// const bookShelf = {
//   books: ["Последнее королевство"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     const bookIndex = this.books.indexOf(bookName);
//     console.log(bookIndex)
//     this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["Последнее королевство"]
// bookShelf.addBook("Мгла");
// bookShelf.addBook("Страж снов");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Мгла", "Страж снов"]
// bookShelf.removeBook("Мгла");
// console.log(bookShelf.getBooks()); // ["Последнее королевство", "Страж снов"]


// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
//     // Change code below this line
//     const bookIndex = this.books.indexOf(oldName);
//     this.books.splice(bookIndex, 1,newName);
//      return bookShelf.books
// },

//     // Change code above this line
//   }

// console.log(bookShelf.updateBook("The last kingdom" , "Putin Huylo"));

// const atTheOldToad = {
//   potions: ["Speed potion", "Dragon breath", "Stone skin"],
//   // Change code below this line
//   getPotions() {
//     return this.potions
//   },
//   addPotion(potionName){
//     this.potions.push(potionName);
//   },
//    removeBook(potionName) {
//     const potionsIndex = this.potions.indexOf(potionName);
//     console.log(potionsIndex)
//     this.potions.splice(potionsIndex, 1);
//   },
//    updatePotionName(oldName, newName) {
//     const potionsIndex = this.potions.indexOf(oldName);
//     console.log(potionsIndex)
//     this.potions.splice(potionsIndex, 1,newName);
//   },

//   // Change code above this line
// };

// atTheOldToad.addPotion("Invisibility")
// console.log(atTheOldToad.getPotions())
// atTheOldToad.removeBook("Dragon breath")
// console.log(atTheOldToad.getPotions())
// atTheOldToad.updatePotionName("Invisibility","Polymorth")
// console.log(atTheOldToad.getPotions())

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

// let newPotion ={ name: "Speed potion", price: 460 }
// for (const potion of atTheOldToad.potions) {
//   // console.log(potion)
//   console.log(potion.name===newPotion.name)
// }

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions){
//     if (potion.name===newPotion.name) {
//       return `Error! Potion ${newPotion.name} is already in your inventory!`;
//     }
// }
//     this.potions.push(newPotion);
//   },
  // removePotion(potionName) {
  //   const potionIndex = this.potions.indexOf(potionName);

  //   if (potionIndex === -1) {
  //     return `Potion ${potionName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1);
  // },
  // updatePotionName(oldName, newName) {
  //   const potionIndex = this.potions.indexOf(oldName);

  //   if (potionIndex === -1) {
  //     return `Potion ${oldName} is not in inventory!`;
  //   }

  //   this.potions.splice(potionIndex, 1, newName);
  // },
  // Change code above this line
// };

//  console.log(atTheOldToad.getPotions())
// atTheOldToad.addPotion({ name: "Invisibility", price: 500 })
// // console.log(atTheOldToad.getPotions())
// atTheOldToad.addPotion({ name: "Speed potion", price: 460 })
// console.log(atTheOldToad.getPotions())
// // console.log(atTheOldToad.getPotions())
// // atTheOldToad.removeBook("Dragon breath")
// // console.log(atTheOldToad.getPotions())
// // atTheOldToad.updatePotionName("Invisibility","Polymorth")
// // console.log(atTheOldToad.getPotions())

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

// let oldName = "Speed potion";
// let newName = "Putin Huylo"
// // const Index = atTheOldToad.potions.name
// console.log(atTheOldToad.potions)
// // console.log(atTheOldToad.potions[0].name = newName)
// // console.log(atTheOldToad.potions)





// for (const potion of atTheOldToad.potions) {
    
//     // console.log(potion)
//     // console.log(potion.name)
//   // const potionIndex = potion.name.indexOf(oldName);
//    let potionIndex = -1;
//   // console.log(potionIndex)
//     if (potion.name === oldName) {
//              potion.name = newName;
//             }


//     // potion.name.splice(potionIndex, 1, newName);
//   }
    // Change code below this line
  //   getPotions() {
  //       return this.potions;
  // },
    
    // addPotion(newPotion) {
    //     for (const potion of this.potions) {
    //       if (newPotion.name === potion.name) {
    //           return `Error! Potion ${newPotion.name} is already in your inventory!`      
    //       }
       
    //   }
    //    return this.potions.push(newPotion);  
    //     },
        
    
  //   removePotion (potionName) {
  //       let potionIndex = -1;
  //       for (const potion of this.potions) {
  //           if (potion.name === potionName) {
  //               potionIndex = this.potions.indexOf(potion);
  //           }
  //       }
  //       if (potionIndex === -1) {
  //           return `Potion ${potionName} is not in inventory!`;
  //       }
  //       return this.potions.splice(potionIndex, 1);
  // },
    
    
//   updatePotionName(oldName, newName) {
    
//     for (const potion of this.potions) {
//       let potionIndex = 0
      
      
//       if (potion.name === oldName) {
//         potionIndex = this.potions.indexOf(potion);
//         console.log(this.potions.indexOf(potion));
//         potion.name = newName;
//       }
//       if (potionIndex === -1)
//       {
//         return `Potion ${oldName} is not in inventory!`;
//       }
 
//     }
//   }   
// };

// atTheOldToad.addPotion({ name: "Invisibility", price: 500 })
// console.log(atTheOldToad.getPotions())
// atTheOldToad.addPotion({ name: "Speed potion", price: 460 })
// console.log(atTheOldToad.getPotions())

// atTheOldToad.removePotion("Speed potion")
// console.log(atTheOldToad.getPotions())



// atTheOldToad.updatePotionName("Dragon breath", "Huylo")
// console.log(atTheOldToad.getPotions())