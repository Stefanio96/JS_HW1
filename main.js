// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
//
// fetch('https://dummyjson.com/carts')
//     .then(res => res.json())
//     .then(value => {
//         let { carts } = value
//         console.log(value)
//         for (const cart of carts) {
//             let block = document.createElement('div')
//
//             let h2 = document.createElement("h2")
//             h2.innerText = `Box Id: ${cart.id}, Total: ${cart.total}, Total Discount: ${cart.discountedTotal}, UserId: ${cart.userId}`
//             block.appendChild(h2)
//
//             let ul = document.createElement("ul")
//
//             for (const product of cart.products) {
//                 let li = document.createElement('li')
//                 li.innerText = `Id: ${product.id}, Title: ${product.title}, Price: ${product.price}, Quantity: ${product.quantity}, Total; ${product.total}`
//                 ul.appendChild(li)
//             }
//
//             block.appendChild(ul)
//             document.body.appendChild(block)
//         }
//     })
//


//

    // - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.


//
// fetch('https://dummyjson.com/recipes')
//     .then(res => res.json())
//     .then(value => {
//         let {recipes}=value
//
//
//         for (const recipe of recipes) {
//             let block=document.createElement('div')
//
//             let h2=document.createElement("h2")
//             h2.innerText=recipe.id
//             block.appendChild(h2)
//
//
//
//             let h1=document.createElement('h1')
//             h1.innerText=recipe.name
//             block.appendChild(h1)
//
//             let img=document.createElement('img')
//             img.src=recipe.image
//             block.appendChild(img)
//
//
//             let ul=document.createElement("ul")
//             let ingredients=recipe.ingredients
//
//
//             for (const ingredient of ingredients) {
//                 let li=document.createElement('li')
//                 li.innerText=ingredient
//                 ul.appendChild(li)
//
//
//             }
//             block.appendChild(ul)
//             document.body.appendChild(block)
//
//         }
//     });

//
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

// ready