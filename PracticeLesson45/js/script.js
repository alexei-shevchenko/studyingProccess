'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('Click');
// };

// btn.onclick = function() { // Будет выводиться только Second click, т.к. эта функция ниже предидущей
//     alert('Second click');
// };

// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => { // Выводится сразу 2 алерта последовательно
//     alert('Second click');
// });

// let i = 0;
const deleteElement = (e) => { // (e) = (event)
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();

    console.log(event.target);
});
