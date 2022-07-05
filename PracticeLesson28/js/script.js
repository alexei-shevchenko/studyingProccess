'use strict';

// Методы и свойства строк и чисел № 28

const str = 'test';
const arr  = [1, 2, 4];

console.log(arr.length);
console.log(str.toLowerCase());
console.log(str);

const fruit = 'Some fruit';

console.log(fruit.indexOf('ome'));

const logg = 'Hello world';

console.log(logg.slice(6, 11));

console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5)); - похоже что устаревший метод

const num = 12.6;

console.log(Math.round(num));

const test = '12.2px';

console.log(parseInt(test));
console.log(parseFloat(test));