'use strict';

// Циклы, урок № 22

let num = 50;
// Первый цикл
// while (num <= 55) {
//     console.log(num);
//     num++;
// }
// Второй цикл
do {
    console.log(num);
    num++;
}
while (num < 55);

// Третий цикл

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }

    console.log(i);
}