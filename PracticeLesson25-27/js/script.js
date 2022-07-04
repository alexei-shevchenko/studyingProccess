'use strict';

// Функции, стрелочные функции

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Hello World!');

// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

function ret() {
    let num = 50;
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
    console.log('Hello');
};

logger();

const calc = (a, b) => {
    console.log('1');
    return a + b;
};

/* Замыкание функции (Когда функция создана и передаётся куда-либо, или возвращается
 из другой функции, то она носит с собой рюкзак. А в этом рюкзаке хранятся все переменные,
 которые были в области видимости во время создания этой функции.) */

function createCounter() {
   let counter = 0;
   const myFunction = function() {
     counter = counter + 1;
     return counter;
   };
   return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);

// Аргументы 26-27 урок

const usdCurr = 28;
const eurCurr = 32;
const discount = 0.9;

function convert(amount, curr) {
    return curr * amount;
}
function promotion(result) {
    console.log(result * discount);
}

promotion(convert(500, usdCurr));

const res = convert(500, usdCurr);
promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) return
    }
}

test();

function doNothing() {};
console.log(doNothing() === undefined); // ответ - true