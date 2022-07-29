'use strict';

const birthday = Symbol('birthday');

const user = {
    name: 'Alex',
    surname: 'Smith',
    [birthday]: '20/04/2021',
    showMyPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

// Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});


Object.defineProperty(user, 'showMyPublicData', {enumerable: false});

for (let key in user) console.log(key);
console.log(Object.getOwnPropertyDescriptor(user, birthday));


Object.defineProperties(user, {
    name: {writable: false},
    surname: {writabel: false}
});





// writeble
// enumerable
// configurable