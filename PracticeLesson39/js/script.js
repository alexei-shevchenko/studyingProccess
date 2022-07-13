'use strict';

// Передача по ссылке или по значению, Spread оператор. Урок № 35

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // ссылка на obj

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// Поверхностное копирование с помощью цикла в функции (подойдёт для копирования
// объекта без вложенностей(объекты/функции))

function copy(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// Поверхностное копирование с помощью Object.assign()

const add = {
    d: 17,
    e: 20
};

const clone = Object.assign({}, add);

clone.d = 20;

// console.log(add);
// console.log(clone);

// Поверхностное копирование с помощью метода .slice()

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'asdwe';
console.log(newArray);
console.log(oldArray);

// Оператор spread - '...'

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// Поверхностное копирование с помощью spread оператора

const array = ['a', 'b'];

const secondArray = [...array];

secondArray[1] = 'c';

console.log(array);
console.log(secondArray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};
newObj.one = 3;

console.log(newObj);