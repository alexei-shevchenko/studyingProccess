'use strict';

// Методы перебора массивов

// 1) filter

// const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

// const shortNames = names.filter(name => {
//     return name.length < 5;
// });

// console.log(shortNames);

// 2) map

// const answers = ['IvAn', 'AnnA', 'Hello'];

// // const result = answers.map(item => {
// //     return item.toLocaleLowerCase();
// // });

// const result = answers.map(item => item.toLocaleLowerCase()); // Сокращённая запись кода выше

// console.log(result);

// 3) every/some

// const some = [4, 'qwq', 'sdfew'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// 4) reduce

// const arr = [4, 5, 1, 3, 2, 6];
//                 //   sum    current
//                 //     0    4
//                 //     4    5
//                 //     9    1
//                 //     10   3
// const res = arr.reduce((sum, current) => sum + current, 3); // 3 - это второй аргумент для reduce, второй аргумент "по умолчанию"
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);