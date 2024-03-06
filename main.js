 // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
//
// function c (a,b){
//     return  a*b
//
// }
//
// console.log(c(5,2))
//
// //- створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function circle (p,r){
//     return p*(r*r)
//
// }
//
// console.log(circle(3.14, 60))
//
// //- створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cilindr (h,r){
//     const p = 3.14
//     return 2*p*r*h
// }
//
// console.log(cilindr(2,2))
//
// //- створити функцію яка приймає масив та виводить кожен його елемент
//
//
// let arr= [
//     1,2,3,4,5
//
// ]
// function arr1(arr){
//     for (let number of arr) {
//         console.log(number)
//     }
// }
//
// arr1(arr)
//
// //- створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function text(sting){
//     document.write(`<p>${sting}</p>`)
//
// }
// text('lalala')
//
// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function t1(text){
//     document.write(`<ul>
//                         <li>${text}</li>
//                         <li>${text}</li>
//                         <li>${text}</li>
// </ul>`)
// }
//
// t1('lalala')
//
// //- створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// // Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
//
//
// function createULWithCount(text, count) {
//
//     for (let i = 0; i < count; i++) {
//         document.write(`<ul>
//                             <li>${text}</li>
//                        </ul>`)
//     }
//
// }
//
// createULWithCount('any text',3)
//
// //- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let charact=[1,true,'okten']
//
//
// function listElements(array){
//
//     for (let resultListElement of array) {
//
//         document.write(`<ul>
//                            <li>${resultListElement}</li>
//                        </ul>`)
//
//     }
//
//
//     }
//     listElements(charact)


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

//  function list(array) {
//      array.forEach(item => {
//          document.write(`<div>ID: ${item.id}</div>`)
//          document.write(`<div>Name: ${item.name}</div>`)
//          document.write(`<div>Age: ${item.age}</div>`)
//          document.write(`<br>`)
//      })
//  }
//  const objects= [
//      { id:1,name: 'Ivan', age: 20 },
//      { id: 2, name: 'Misha', age: 27 },
//      { id: 3, name: 'Sergiy', age:41 }
//  ]
//
// list(objects)

//- створити функцію яка повертає найменьше число з масиву
//
//  function minOf(array){
//     let min = arguments[0]
//         for (const item of arguments){
//             if (item < min){
//                 min=item
//         }
//     }
//      console.log('Min: ',min)
//  }
// let min1=minOf(5,12,587,18)


//- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// function sum(arr){
//     let total=0
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
// return total
//
//  }
//
//  let numbers=[5,8,4]
//  console.log(sum(numbers))


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
//  function swap(arr, index1, index2) {
//
//      if (index1 < 0 || index1 >= arr.length || index2 < 0 || index2 >= arr.length) {
//          console.error('Mistake!');
//          return arr;
//      }
//
//
//      const temp = arr[index1];
//      arr[index1] = arr[index2];
//      arr[index2] = temp;
//
//      return arr;
//  }
//
//  // Приклад використання функції
//  const arr = [11, 22, 33, 44];
//  console.log(swap(arr, 0, 1));


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
 // Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

// function exChange(sumUAH,currencyValues,exchangeCurrency){
//     for (let item of currencyValues) {
//         if (exchangeCurrency == item.currency)
//             console.log(sumUAH / item.value)
//
//     }
//
// }
//
// let arr=[
//     {currency:'USD',value:40},
//     {currency:'EUR',value:42}
// ]
//
// exChange(10000,arr,'EUR')
//
//





















