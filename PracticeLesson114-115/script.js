'use strict';
// Урок 114
// setTimeout(() => {
//     console.log(1);
// }, 0);

// console.log(2);

// Урок 115

setTimeout(() => console.log('timeout'));

Promise.resolve()
    .then(() => console.log('promise'));

queueMicrotask(() => console.log('wow'));

Promise.resolve()
    .then(() => console.log('promise_2'));

console.log('code');

// () => {} - macrotasks
// microtasks: then/catch/finally/await
// render
// () => {}
// microtasks: then/catch/finally/await
// render
// () => {}