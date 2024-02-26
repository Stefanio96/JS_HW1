//- Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let dotaHeroes = [
    {id: 1, name: 'invoker', type: 'int', skils: 10},
    {id: 2, name: 'axe', type: 'strength', skils: 4},
    {id: 3, name: 'spectre', type: 'agility', skils: 6},
    {id: 4, name: 'phoenyx', type: 'strength', skils: 4},
    {id: 5, name: 'shadowDemon', type: 'int', skils: 6},
    {id: 6, name: 'brewmaster', type: 'universal', skils: 7},
    {id: 7, name: 'arkWarden', type: 'agility', skils: 8},
    {id: 8, name: 'mirana', type: 'universal', skils: 4},
    {id: 9, name: 'medusa', type: 'agility', skils: 5},
    {id: 10, name: 'zeus', type: 'int', skils: 6},

]
console.log(dotaHeroes)

let dotaHEro1 =
    {id: 1, name: 'invoker', type: 'int', skils: 10}
console.log(dotaHEro1)

let dotaHEro2 =
    {id: 2, name: 'axe', type: 'strength', skils: 4}
console.log(dotaHEro2)

let dotaHEro3 =
    {id: 3, name: 'spectre', type: 'agility', skils: 6}
console.log(dotaHEro3)

let dotaHEro4 =
    {id: 4, name: 'phoenyx', type: 'strength', skils: 4}
console.log(dotaHEro4)

let dotaHEro5 =
    {id: 5, name: 'shadowDemon', type: 'int', skils: 6}
console.log(dotaHEro5)

let dotaHEro6 =
    {id: 6, name: 'brewmaster', type: 'universal', skils: 7}
console.log(dotaHEro6)

let dotaHEro7 =
    {id: 7, name: 'arkWarden', type: 'agility', skils: 8}
console.log(dotaHEro7)

let dotaHEro8 =
    {id: 8, name: 'mirana', type: 'universal', skils: 4}
console.log(dotaHEro8)

let dotaHEro9 =
    {id: 9, name: 'medusa', type: 'agility', skils: 5}
console.log(dotaHEro9)

let dotaHEro10 =
    {id: 10, name: 'zeus', type: 'int', skils: 6}
console.log(dotaHEro10)

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 =
    {
        title: 'Harry Potter', pageCount: 900, genre: 'magic', authors: [{}
        ]
    }
console.log(book1)

let book2 =
    {title: 'Robinson Crusoe', pageCount: 400, genre: 'adventures'}
console.log(book2)

let book3 =
    {title: 'All souls', pageCount: 700, genre: 'psychology'}
console.log(book3)

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let bookOne =
    {
        title: 'Harry Potter',
        pageCount: 900,
        genre: 'magic',
        authors: [
            {
                name: 'Joan Rowling',
                age: 55
            }

        ]
    }


let bookTwo =
    {
        title: 'Robinson Crusoe',
        pageCount: 400,
        genre: 'adventures',
        authors: [
            {
                name: 'Daniel Defoe',
                age: 65
            }

        ]
    }


let bookThree =
    {
        title: 'All souls',
        pageCount: 700,
        genre: 'psychology',
        authors: [
            {
                name: 'Deborah Harkness',
                age: 50
            }

        ]
    }

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name: 'ivan', username: 'ivan33', password: 1},
    {name: 'ivan', username: 'ivan33', password: 12},
    {name: 'ivan', username: 'ivan33', password: 123},
    {name: 'ivan', username: 'ivan33', password: 1234},
    {name: 'ivan', username: 'ivan33', password: 12345},
    {name: 'ivan', username: 'ivan33', password: 123456},
    {name: 'ivan', username: 'ivan33', password: 1234567},
    {name: 'ivan', username: 'ivan33', password: 1234578},
    {name: 'ivan', username: 'ivan33', password: 12345910},
    {name: 'ivan', username: 'ivan33', password: 12345695}
]
console.log(user[0].password)
console.log(user[1].password)
console.log(user[2].password)
console.log(user[3].password)
console.log(user[4].password)
console.log(user[5].password)
console.log(user[6].password)
console.log(user[7].password)
console.log(user[8].password)
console.log(user[9].password)

//Логічні розгалуження:
//- Є змінна х, якій ви надаєте довільне числове значення
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 15;
if (x != 0) {
    document.write('Вірно')
} else {
    document.write('Невірно')
}

let a = 1;

if (a == 1) {
    document.write('Вірно')
} else {
    document.write('Невірно')
}


//- Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число


let time = (15) // 0-15, 15-30, 30-45, 45=59

if (time > 0 && time <= 15) {
    document.write('Перша четветь')

} else if (time > 15 && time <= 30) {
    document.write('Друга четверть')

} else if (time > 30 && time <= 45) {
    document.write('Третя четверть')

} else if (time > 45 && time <= 59) {
    document.write('Четверта четверть')
}
//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 17

if (day > 0 && day <= 10) {
    document.write('Перша декада')

} else if (day > 10 && day <= 20) {
    document.write('Друга декада')

} else if (day > 20 && day <= 30) {
    document.write('Третя декада')
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let days = 1

switch (days) {
    case 1:
        console.log('Training')
        break
    case 2:
        console.log('Swimming')
        break
    case 3:
        console.log('Running')
        break
    case 4:
        console.log('Working')
        break
    case 5:
        console.log('Gaming')
        break
    case 6:
        console.log('Shopping')
        break
    case 7:
        console.log('Sleeping')
        break
}

//- Користувач вводить або має два числа.Потрібно знайти та вивести максимальне число з тих двох .Також потрібно врахувати коли введені рівні числа.

let b = 15
let c = 35

if (b < c) {
    console.log(c)
} else {
    console.log(b)
}

//- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)

let v = 15
v = v || 'default'

//- з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
// За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >= 5) {
    console.log('Супер')

}
if (coursesAndDurationArray[1].monthDuration >= 5) {
    console.log('Супер')

}
if (coursesAndDurationArray[2].monthDuration >= 5) {
    console.log('Супер')

}
if (coursesAndDurationArray[3].monthDuration >= 5) {
    console.log('Супер')

}
if (coursesAndDurationArray[4].monthDuration >= 5) {
    console.log('Супер')

}
if (coursesAndDurationArray[5].monthDuration >= 5) {
    console.log('Супер')

}
































































