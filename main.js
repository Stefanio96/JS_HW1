//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині


// const names=[
//     {name: 'vasya',age: 32,city:'Bakhmut'},
//     {name: 'andre',age:45,city:'Dnipro'},
//     {name: 'peter', age:45,city:'Kyiw'},
//     {name: 'stefan', age:45,city:'Uzhhorod'},
//     {name: 'brite', age:45,city:'Lviv'},
//     {name: 'bred', age:45,city:'Odessa'},
//     {name: 'leo', age:45,city:'Kharkiv'},
//     {name: 'mokl', age:45,city:'Smila'},
//     {name: 'ivan', age:45,city:'Mukachevo'},
//     {name: 'misha', age:45,city:'Simferopol'},
// ]
//
// for (let i = 0; i < 10; i++) {
//     document.write(`<div>lalala</div>`)
//
// }


//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині


// for (let i = 0; i < 10; i++) {
//     document.write(`<div>lalala</div>`,i)
//
// }


//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

// let i=1
// while (i<20){
//     i++
//     document.write(`<div><h1>lalala</h1></div>`)
// }

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

// let i =1
// while (i<20){
//     i++
//    document.write(`<div><h1>lalala</h1></div>`,i)
// }
//


//- Використовуючи данні з масиву, за допомоги document.write та циклу
//побудувати структуру по шаблону

// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву


// let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
// for (const x  of listOfItems) {
//     document.write(`<ul>
//         <li>${x}</li>
//
//     </ul>`)}































