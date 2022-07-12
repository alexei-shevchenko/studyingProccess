'use strict';

// Упражнение по написанию кода №10 (работа с объектами)

// Первое задание

const personalPlanPeter = {
    name: 'Peter',
    age: '29',
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));

// Первое задание (моё решение)

function showExperience(plan) {
    const {exp} = plan.skills;
    return console.log(exp);
}

showExperience(personalPlanPeter);

// Второе задание

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`;
    }

    return str;
}
console.log(showProgrammingLangs(personalPlanPeter));


// Упражнение по написанию кода №11 (работа с массивами)

// Первое задание

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = '';

    arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    arr.forEach(member => {
        str += `${member} `;
    });
    
    return str;
}

console.log(showFamily(family));

// Второе задание
// моё решение
const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    for (let value of arr) {
        console.log(value.toLowerCase());
    }
}

standardizeStrings(favoriteCities);

// решение по курсу

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(city.toLowerCase());
    });
}

// Упражнение по написанию кода №12 (работа с массивами ч.2)

// Третье задание

// Моё решение

const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return 'Ошибка!';
    }

    let strReverse = str.split('');
    strReverse.reverse();
    
    let newStr = strReverse.join('');
    return newStr;

}

console.log(reverse(someString));

// Решение по курсу

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    // let newStr = '';
    // for (let i = str.length - 1; i >= 0; i--) {
    //     newStr += str[i];
    // }
    // return newStr;
}

// Четвёртое задание

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const b = [];

function availableCurr(arr, missingCurr) {
    let str = '';

    arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

    arr.forEach(function(curr, i) { // Не совсем понимаю для чего 'i', работает и без неё
        if (curr !== missingCurr) {
            str += `${curr}\n`;
        }
    });

    return str;
}

console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));

