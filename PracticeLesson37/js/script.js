'use strict';

// Практика, часть 4 ур. 37. Объекты


const personalMobieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMobieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMobieDB.count == '' || personalMobieDB.count == null || isNaN(personalMobieDB.count)) {
            personalMobieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMobieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMobieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMobieDB.count >= 10 && personalMobieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMobieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMobieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMobieDB.privat) {
            personalMobieDB.privat = false;
        } else {
            personalMobieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 2; i++) {
            // let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            // if (genre === '' || genre == null) {
            //     console.log('Вы ввели некорректные данные или не ввели их вовсе');
            //     i--;
            // } else {
            //     personalMobieDB.genres[i - 1] = genre;
            // }      
            
            let genres = prompt(`Введите ваши любимые жанры через запятую`).toLowerCase();

            if (genres === '' || genres == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMobieDB.genres = genres.split(', ');
                personalMobieDB.genres.sort();
            }      
        }

        personalMobieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};
