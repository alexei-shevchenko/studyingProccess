'use strict';

// new RegExp('pattern', 'flags'); // Старый метод создания паттернов
// /pattern/f // новый метод создания паттернов

// const ans = prompt('Введите ваше имя');

// const reg = /\d/g;
// console.log(ans.match(reg));

const str = 'My name is R2D2';


console.log(str.search(/\d/ig));
console.log(str.match(/\D/ig));

// Классы в регулярных выражениях

// \d - поиск цифр
// \w - поиск букв
// \s - spaces поиск пробелов

// Обратные классы 

// \D - поиск "не чисел"
// \W - поиск "не букв"
// \S - поиск "не пробелов"

// Флаги
// i - применяется к верхием и нижним регистрам
// g - глобальный 
// m - 

// console.log(ans.search(reg));
// console.log(ans.match(reg));

// const pass = prompt('Password');

// console.log(pass.replace(/./g, '*'));

// console.log('12-34-56'.replace(/-/g, ':'));