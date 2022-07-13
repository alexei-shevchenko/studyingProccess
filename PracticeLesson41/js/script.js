'use strict';

// let x = 5; alert(x++);
// [] + false - null + true
// console.log(typeof([] + false)); // false
// console.log([] + false - null + true); // NaN

// let y = 1;
// let x = y = 2;
// alert(x);  // Результат = 2

// console.log([] + 1 + 2); // 12

// console.log('12'[1]); // 2

// console.log(2 && 1 && null && 0 && undefined); // null / И всегда запинается на лжи

// console.log(!!(1 && 2) === (1 && 2)); // false

alert(null || 2 && 3 || 4);