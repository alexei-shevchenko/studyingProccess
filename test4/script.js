'use strict';

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
// Object.entries(item)[1][1] - обращение ко второму значению второго массива объекта 
// const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr);
// console.log(result);

const result = arr.map(item => Object.entries(item)[1][1]);
console.log(result);