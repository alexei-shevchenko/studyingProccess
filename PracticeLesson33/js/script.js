'use strict';

// Массивы и псевдомассивы № 33

const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// Перебор массива с метод .forEach

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// arr.pop();
// arr.push(10);

// console.log(arr);

// Перебор массива с помощью цикла

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Перебов массива (метод for...of)

for (let value of arr) {
    console.log(value);
}

const str = prompt('', '');
const products = str.split(', ');
products.sort();
console.log(products.join('; '));