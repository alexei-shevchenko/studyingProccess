'use strict';

// Первое практическое задание

// First task

// let num = 5

// while (num <= 10) {
//     console.log(num);
//     num++;
// }

// Second task

for (let i = 20; i >= 10; i--) {
    if (i === 13) {
        break;
    }
    console.log(i);
}

// Third task 

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Fourth task

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let num = 2;

while (num <= 16) {
    if (num % 2 === 0) {
        num++;
        continue;
    } else {
        console.log(num);
    }
    num++;
}

// Fifth task

const arrayOfNumbers = [];

arrayOfNumbers[0] = 5;
arrayOfNumbers[1] = 6;
arrayOfNumbers[2] = 7;
arrayOfNumbers[3] = 8;
arrayOfNumbers[4] = 9;
arrayOfNumbers[5] = 10;

console.log(arrayOfNumbers);

// Второе практическое задание (продвинутое)

// first task

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
    result[i] = arr[i];
}

console.log(result);

for (let i = 1; i <= 8; i++) {
    console.log(i);
}

// second task

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
    if (typeof(data[i]) === 'number') {
        data[i] = data[i] * 2;
    } else if (typeof(data[i]) === 'string') {
        data[i] = `${data[i]} - done`;
    }
}

console.log(data);

// third task

const data2 = [5, 10, 'Shopping', 20, 'Homework'];
const result2 = [];

for (let i = 1; i <= data2.length; i++) {
    result2[i - 1] = data2[data2.length - i];
}

console.log(result2);