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
        let str = `Мне ${age}и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()}`;
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
