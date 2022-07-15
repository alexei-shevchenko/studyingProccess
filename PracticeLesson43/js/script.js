'use strict';

// Урок №43 Действия с элементами на странице

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');      

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// console.dir(box);

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';

circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

wrapper.append(div);
// wrapper.appendChild(div); // Устаревший метод

// wrapper.prepend(div);

// hearts[1].before(div); // Добавляет div перед вторым элементом псевдомассива
// hearts[1].after(div);  // Добавляет div после второго элемента псевдомассива  

// wrapper.insertBefore(div, hearts[2]); // Устаревший метод

// circles[0].remove(); // Удаляет выбранный элемент
// wrapper.removeChild(hearts[1]); // Устаревший метод

// hearts[1].replaceWith(circles[0]); // Заменяет второе сердце первым кругом
// wrapper.replaceChild(circles[0], heart[0]); // Устаревший метод

div.innerHTML = '<h1>Hello world</h1>';

// div.textContent = '<h1>Hello world</h1>';

div.insertAdjacentHTML('', '<h2>Hello</h2>');