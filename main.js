// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str1='hello world'
// let str2='lorem ipsum'
// let str3='javascript is cool'
//
// console.log('str1:',str1.length)
// console.log('str2:',str2.length)
// console.log('str3:',str3.length)
//
//

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

//  let str1='hello world'
//  let str2='lorem ipsum'
//  let str3='javascript is cool'
//
//
// console.log(str1.toUpperCase())
// console.log(str2.toUpperCase())
// console.log(str3.toUpperCase())


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let str1='HELLO WORLD'
// let str2='LOREM IPSUM'
// let str3='JAVASCRIPT IS COOL'
//
// console.log(str1.toLowerCase())
// console.log(str2.toLowerCase())
// console.log(str3.toLowerCase())
//



// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str1='     dirty string    '
//
// console.log(str1.trim())



// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//
// let str='Ревуть воли як ясла повні'
//
// console.log(str.split(' '))
//


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

// let arr=[10,8,-7,55,987,-1011,0,1050,0]
//
// let str=arr.map(number =>number.toString() )
// console.log(str)
//



// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//

// let nums = [11,21,3];
//
// let sortNums=(arr,direction) =>{
//
//     if (direction ==='ascending'){
//
//         arr.sort((a,b)=>  a-b )
//
//     }
//
//     else{
//          arr.sort((a,b)=>b-a )
//
//     }
//
// }
// sortNums(nums,'descending   ')
// console.log(nums)


// ==========================
// - є масив
 let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
     {title: 'Java Complex', monthDuration: 6},
     {title: 'Python Complex', monthDuration: 6},
     {title: 'QA Complex', monthDuration: 4},
     {title: 'FullStack', monthDuration: 7},
     {title: 'Frontend', monthDuration: 4}
 ];


// -- відсортувати його за спаданням за monthDuration
// coursesAndDurationArray.sort((a,b) =>b.monthDuration - a.monthDuration)
// console.log(coursesAndDurationArray)



// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let numbers=coursesAndDurationArray.filter((num)=>num.monthDuration >=5)
// console.log(numbers)


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
// let box=coursesAndDurationArray.map((element,index)=>{
//     let u={
//         id:index,
//         title:element.title,
//         monthDuration: element.monthDuration
//
//     }
//     return u
// })
//
// console.log(box)


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
// let cards=[
//     { cardSuit: 'spade', value: '6', color:'black'},
//     { cardSuit: 'diamond', value: '6', color:'red'},
//     { cardSuit: 'clubs', value: '6', color:'black'},
//     { cardSuit: 'heart', value: '6', color:'red'},
//     { cardSuit: 'spade', value: '7', color:'black'},
//     { cardSuit: 'diamond', value: '7', color:'red'},
//     { cardSuit: 'clubs', value: '7', color:'black'},
//     { cardSuit: 'heart', value: '7', color:'red'},
//     { cardSuit: 'spade', value: '8', color:'black'},
//     { cardSuit: 'diamond', value: '8', color:'red'},
//     { cardSuit: 'clubs', value: '8', color:'black'},
//     { cardSuit: 'heart', value: '8', color:'red'},
//     { cardSuit: 'spade', value: '9', color:'black'},
//     { cardSuit: 'diamond', value: '9', color:'red'},
//     { cardSuit: 'clubs', value: '9', color:'black'},
//     { cardSuit: 'heart', value: '9', color:'red'},
//     { cardSuit: 'spade', value: '10', color:'black'},
//     { cardSuit: 'diamond', value: '10', color:'red'},
//     { cardSuit: 'clubs', value: '10', color:'black'},
//     { cardSuit: 'heart', value: '10', color:'red'},
//     { cardSuit: 'spade', value: 'jack', color:'black'},
//     { cardSuit: 'diamond', value: 'jack', color:'red'},
//     { cardSuit: 'clubs', value: 'jack', color:'black'},
//     { cardSuit: 'heart', value: 'jack', color:'red'},
//     { cardSuit: 'spade', value: 'queen', color:'black'},
//     { cardSuit: 'diamond', value: 'queen', color:'red'},
//     { cardSuit: 'clubs', value: 'queen', color:'black'},
//     { cardSuit: 'heart', value: 'queen', color:'red'},
//     { cardSuit: 'spade', value: 'king', color:'black'},
//     { cardSuit: 'diamond', value: 'king', color:'red'},
//     { cardSuit: 'clubs', value: 'king', color:'black'},
//     { cardSuit: 'heart', value: 'king', color:'red'},
//     { cardSuit: 'spade', value: 'ace', color:'black'},
//     { cardSuit: 'diamond', value: 'ace', color:'red'},
//     { cardSuit: 'clubs', value: 'ace', color:'black'},
//     { cardSuit: 'heart', value: 'ace', color:'red'},
// ]
// - знайти піковий туз

// let findAce=cards.filter((card)=>
//     card.cardSuit==='spade' && card.value==='ace' && card.color==='black'
// )
// console.log(findAce)
//
//
// // - всі шістки
//
// let findSix=cards.filter((card)=>
//     card.value ==='6'
// )
//
// console.log(findSix)
//



// - всі червоні карти

// let findRed=cards.filter((card)=>
//     card.color ==="red"
// )
// console.log(findRed)



// - всі буби

// let findDiamond=cards.filter((card)=>
//     card.cardSuit==="diamond"
// )
//
// console.log(findDiamond)


// - всі трефи від 9 та більше

// let findClubs=cards.filter((card)=>
//     card.cardSuit==="clubs" && card.value >='9'
// )
// console.log(findClubs)
//

// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт

//
// let cards=[
//     { cardSuit: 'spade', value: '6', color:'black'},
//     { cardSuit: 'diamond', value: '6', color:'red'},
//     { cardSuit: 'clubs', value: '6', color:'black'},
//     { cardSuit: 'heart', value: '6', color:'red'},
//     { cardSuit: 'spade', value: '7', color:'black'},
//     { cardSuit: 'diamond', value: '7', color:'red'},
//     { cardSuit: 'clubs', value: '7', color:'black'},
//     { cardSuit: 'heart', value: '7', color:'red'},
//     { cardSuit: 'spade', value: '8', color:'black'},
//     { cardSuit: 'diamond', value: '8', color:'red'},
//     { cardSuit: 'clubs', value: '8', color:'black'},
//     { cardSuit: 'heart', value: '8', color:'red'},
//     { cardSuit: 'spade', value: '9', color:'black'},
//     { cardSuit: 'diamond', value: '9', color:'red'},
//     { cardSuit: 'clubs', value: '9', color:'black'},
//     { cardSuit: 'heart', value: '9', color:'red'},
//     { cardSuit: 'spade', value: '10', color:'black'},
//     { cardSuit: 'diamond', value: '10', color:'red'},
//     { cardSuit: 'clubs', value: '10', color:'black'},
//     { cardSuit: 'heart', value: '10', color:'red'},
//     { cardSuit: 'spade', value: 'jack', color:'black'},
//     { cardSuit: 'diamond', value: 'jack', color:'red'},
//     { cardSuit: 'clubs', value: 'jack', color:'black'},
//     { cardSuit: 'heart', value: 'jack', color:'red'},
//     { cardSuit: 'spade', value: 'queen', color:'black'},
//     { cardSuit: 'diamond', value: 'queen', color:'red'},
//     { cardSuit: 'clubs', value: 'queen', color:'black'},
//     { cardSuit: 'heart', value: 'queen', color:'red'},
//     { cardSuit: 'spade', value: 'king', color:'black'},
//     { cardSuit: 'diamond', value: 'king', color:'red'},
//     { cardSuit: 'clubs', value: 'king', color:'black'},
//     { cardSuit: 'heart', value: 'king', color:'red'},
//     { cardSuit: 'spade', value: 'ace', color:'black'},
//     { cardSuit: 'diamond', value: 'ace', color:'red'},
//     { cardSuit: 'clubs', value: 'ace', color:'black'},
//     { cardSuit: 'heart', value: 'ace', color:'red'},
// ]
//
//
//
// let reduce=cards.reduce((accumulator,card)=> {
//         if (card.cardSuit === 'heart') {
//             accumulator.hearts.push(card)
//         }
//         if (card.cardSuit === 'diamond') {
//             accumulator.diamonds.push(card)
//         }
//         if (card.cardSuit === 'spade') {
//             accumulator.spades.push(card)
//
//         } if (card.cardSuit==='clubs')
//             accumulator.clubs.push(card)
//         return accumulator
//     }, {
//     spades:[],
//        diamonds:[],
//      hearts:[],
//      clubs:[]
//  }
// )
// console.log(reduce)
//


// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
//
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'java core',
//             'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'angular',
//             'aws',
//             'docker',
//             'python core',
//             'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html',
//             'css',
//             'js',
//             'mysql',
//             'mongodb',
//             'react',
//             'angular',
//             'aws',
//             'docker',
//             'git',
//             'node.js',
//             'python',
//             'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
//
// const findSass=coursesArray.filter((item)=>{
//     if (item.modules.includes('sass'))
//     return item
// })
// console.log(findSass)
//
// const findDocker=coursesArray.filter((item)=>{
//     if (item.modules.includes('docker'))
//         return item
// })
// console.log(findDocker)

// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
//
//
//
//
//
//
//
//
//
//
//
//
