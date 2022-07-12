'use strict';

// Основы ООП, прототипно ориентированное наследование ур. 36

let str = 'some';
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// john.__proto__ = soldier; // Устаревший вариант, сейчас не применяется, но может встречаться

// Object.setPrototypeOf(john, soldier); // Эта запись равнозначна верхней (новый вариант), где soldier - наследник john-a

// console.log(john.armor);

john.sayHello();
