'use strict';

function factorial(n) {
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'Введено неверное значение';
    } else if (n >= 1) { 
        return n * factorial(n - 1);
    } else {
        return 1; // Возвращает 1, если n - отрицательное число
    }
}

console.log(factorial(4));
console.log(factorial(-5));

