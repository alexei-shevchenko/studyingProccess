'use strict';

// 1

// function showThis(a, b) {
//     console.log(this); // undefined
//     function sum() {
//         console.log(this); // undefined
//         return a + b; // 9
//     }

//     console.log(sum());
// }

// showThis(4, 5); 

// Пример из тестов

// function getSum(a, b) {
//     function sum() {
//         console.log(this.a);
//         return a + b;
//     }
 
//     console.log(sum());
// }
 
// getSum(4, 5); // ошибка

// 2

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// 3

// function User(name, id) {
//     this.name = name;  // this обращается к новому экземпляру - ivan
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log("Hello! " + this.name + " ему " + this.id + " лет");
//     };
// }
// let ivan = new User('Ivan', 23);
// ivan.hello();

// 4

// function sayName(surname, secondName) {
//     console.log(this);
//     console.log(this.name + ' ' + surname + ' ' + secondName);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith', 'Jhonatan');
// sayName.apply(user, ['Smith', 'Peterson']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция: this = window, но если прописан use strict - undefined
// 2) Контекст (this) у методов объекта - сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     this.style.backgroundColor = 'red';
// });

// const obj = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this.num);
//         };
        
//         say();
//     }
// };

// obj.sayNumber();

// const double = a => a * 2; // стрелочная функция с одним аргументом (упрощённый синтаксис)

// console.log(double(4));

// Пример из тестов

const urlObj = {
    protocol: 'https',
    domain: 'mysite.com'
};
 
function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    };
    const extractCurrProtocol = () => {
        return this.protocol;
    };
 
    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);
}
 
const url = showCurrentURL.bind(urlObj); // Функция
url(); // https://mysite.com
console.log(url); // Выводит функцию