'use strict';

// Упражнение по написанию кода №7 (продвинутые задания)

// Первое задание

function calculateVolumeArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return 'При вычислении произошла ошибка';
    }

    let volume = 0,
        area = 0;

    volume = length ** 3;
    area = 6 * (length * length);

    return `Объём куба: ${volume}, площадь всей поверхности: ${area}`;
}

console.log(calculateVolumeArea(5));
console.log(calculateVolumeArea(5.5));
console.log(calculateVolumeArea('5'));
console.log(calculateVolumeArea(-5));

// Второе задание

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return 'Таких мест в вагоне не существует';
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }

}

console.log(getCoupeNumber(20));
console.log(getCoupeNumber(9));

// Упражнение по написанию кода №8 (продвинутые задания)

// Первое задание

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return 'Ошибка, проверьте данные';
    }
    
    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }
   
    return `Это ${hours} ${hoursStr} и ${minutes} минут`;

}

console.log(getTimeFromMinutes(225));

// Второе задание

function findMaxNumber(a, b, c, d) {

    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b, c, d);
    }
    
}

console.log(findMaxNumber(3, 12.2, 11, 10.3));

// Упражнение по написанию кода №9 (продвинутые задания)

function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return '';
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;

}

console.log(fib(7));
console.log(fib(2));