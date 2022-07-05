'use strict';

// Работа с функциями

// Первое задание

function sayHello(name) {
    return `Привет, ${name}!`;
}

console.log(sayHello('Антон'));

// Второе задание

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

console.log(returnNeighboringNumbers(5));

// Третье задание

function getMathResult(num1, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num1;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num1 * i}`;
        }
        else {
            str += `${num1 * i}---`;
        }
    }

    return str;
}

console.log(getMathResult(10, 5));