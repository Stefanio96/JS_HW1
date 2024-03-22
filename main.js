// Стоврити форму з трьома полями для name,surname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

// function submitForm() {
//     let formData = {
//         name: document.getElementById("name").value,
//         surname: document.getElementById("surname").value,
//
//     }
//
//     // Отриманий об'єкт даних форми виводимо під формою
//     let resultDiv = document.getElementById("result")
//     resultDiv.innerHTML = "<pre>" + JSON.stringify(formData, null, 2) + "</pre>"
// }

// ==========================
// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
//
// let numberElement = document.getElementById("number")
//
// let currentNumber = parseInt(numberElement.textContent)
//
// let newNumber = currentNumber + 1
//
// numberElement.textContent = newNumber
//
//
//  ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html.
// Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію


// Зробив!

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів


// const objJson = [
//     { adName: "AdName 1"},
//     { adName: "AdName 2"},
//     { adName: "AdName 3"},
//     { adName: "AdName 4"},
//     { adName: "AdName 5"},
//     { adName: "AdName 6"},
//     { adName: "AdName 7"},
//     { adName: "AdName 8"},
//     { adName: "AdName 9"},
//     { adName: "AdName 10"},
//     { adName: "AdName 2"},
//     { adName: "AdName 3"},
//     { adName: "AdName 4"},
//     { adName: "AdName 5"},
//     { adName: "AdName 32"},
//     { adName: "AdName 73"},
//     { adName: "AdName 84"},
//     { adName: "AdName 95"},
//     { adName: "AdName 10"},
//     { adName: "AdName 32"},
//     { adName: "AdName 36"},
//     { adName: "AdName 48"},
//     { adName: "AdName 5"},
//     { adName: "AdName 60"},
//     { adName: "AdName 76"},
//     { adName: "AdName 88"},
//     { adName: "AdName 94"},
//     { adName: "AdName 10"},
// ]
//
//
// const parentButton = document.getElementById("parentButton")
// const prevButton = document.getElementById("prev")
// const nextButton = document.getElementById("next")
//
// let startIndex=0
//
//
// function displayObjects(startIndex) {
//     parentButton.innerHTML = ""
//     for (let i = startIndex; i < startIndex + 10; i++) {
//         if (i >= objJson.length) break
//         const div = document.createElement("div")
//         div.textContent = objJson[i].adName
//         parentButton.appendChild(div)
//     }
// }
//
// displayObjects(startIndex)
//
//
// nextButton.addEventListener("click", function() {
//     startIndex = Math.min(startIndex + 10, objJson.length - 10)
//     displayObjects(startIndex)
// })
//
//
// prevButton.addEventListener("click", function() {
//     startIndex = Math.max(startIndex - 10, 0)
//     displayObjects(startIndex)
// })


// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

//
// document.getElementById('button').addEventListener('click',function (){
//     let el=document.getElementById('text')
//     if (el.style.display !=='none'){
//         el.style.display ='none'
//     }else {
//         el.style.display = 'block'
//     }
// })



//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18,
//     та повідомити про це користувача
//
// document.getElementById('inspectAgeBtn').addEventListener('click',function (){
//     let age=document.getElementById('age').value
//     if (age >=18){
//         alert('access is allowed')
//     }else {
//         alert('Access is denied')
//     }
// })
//
// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додаткова частина для завдання)



//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається






