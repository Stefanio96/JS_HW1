// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

//

// function User(id, name, surname , email, phone){
//     this.id=id
//     this.name=name
//     this.surname=surname
//     this.email=email
//     this.phone=phone
// }
//
//
// let users=[
//         new User(10,'ivan','ivanov','vava@gmail.com', +380504896354),
//         new User(2,'mukola','azarov','axar@gmail.com', +38050453985),
//         new User(3,'viktor','viktorov','viktor@gmail.com', +380965642315),
//         new User(7,'sergiy','sergeev','seriy@gmail.com', +380978654230),
//         new User(6,'olexandr','olexandrenko','olex@gmail.com', +380501897462),
//         new User(5,'stepan','stepanenko','stefi@gmail.com', +380502369851),
//         new User(4,'viktoriya','viktorenko','vika@gmail.com', +380964230126),
//         new User(8,'masha','mashenko','masha@gmail.com', +380993548209),
//         new User(9,'maryna','marynenko','mari@gmail.com', +3805019784620),
//         new User(1,'stas','stasiv','stan@gmail.com', +3805011122354),
//
// ]
// console.log(users)
// //
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// //
// // let evenNumbers = users.filter((number) => {
// //     return number.id % 2 === 0;
// // });
// //
// // console.log(evenNumbers);
// //
//
//
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// class Use{
//     constructor(id) {
//         this.id=id
//     }
// }
//
// users.sort((a,b)=>{
//     return a.id - b.id
// })
// console.log(users)
//
//
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

// class Client{
//     constructor(id,name,surname,email, phone, order) {
//         this.id=id
//         this.name=name
//         this.surname=surname
//         this.email=email
//         this.phone=phone
//         this.order=order
//     }
//
//
// }
//
//
// let clients =[
//          new Client(10,'ivan','ivanov','vava@gmail.com', '+380504896354',2),
//          new Client(2,'mukola','azarov','axar@gmail.com', '+38050453985',1),
//          new Client(3,'viktor','viktorov','viktor@gmail.com', '+380965642315',4),
//          new Client(7,'sergiy','sergeev','seriy@gmail.com', '+380978654230',3),
//          new Client(6,'olexandr','olexandrenko','olex@gmail.com', '+380501897462',6),
//          new Client(5,'stepan','stepanenko','stefi@gmail.com', '+380502369851',5),
//          new Client(4,'viktoriya','viktorenko','vika@gmail.com', '+380964230126',8),
//          new Client(8,'masha','mashenko','masha@gmail.com', '+380993548209',7),
//          new Client(9,'maryna','marynenko','mari@gmail.com', '+3805019784620',10),
//          new Client(1,'stas','stasiv','stan@gmail.com', '+3805011122354',9)
//
// ]
//
// console.log(clients)
//
//
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
//
//
//  class Cli{
//      constructor(order) {
//          this.order=order
//      }
//  }
//
//  clients.sort((a,b)=>{
//      return a.order - b.order
//  })
//  console.log(clients)
//



// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:


// function Car(model,company,year,maxSpeed,engine){
//     this.model=model
//     this.company=company
//     this.year=year
//     this.maxSpeed=maxSpeed
//     this.engine=engine
//     this.driver=null
//     this.addDriver=function (driver){
//         this.driver=driver
//     }
// }
//
// let cars=[
//     new Car('BMW','Germany','1986','180','2.0'),
//     new Car('Mercedes','Germany','2005','250','3,0'),
//     new Car('Volkswagen','Germany','2007','230','2,0'),
//     new Car('Opel','Germany','2001','199','2,5'),
//     new Car('Audi','Germany','2018','300','1,9'),
//     new Car('Toyota','Japan','2008','240','4,0'),
//     new Car('Citroen','France','2012','150','1,6'),
//     new Car('Mazda','Japan','2007','215','2,0'),
//     new Car('Ford','USA','1999','200','5,0'),
//     new Car('Kia','China','2014','140','1,4')
// ]

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

// function drive(cars){
//     cars.forEach((car)=>{
//         if (car.model==='Ford'){ // Це просто для себе зробив щоб звернутися конкретно до авто
//             console.log(`Швидкість ${car.model} ${car.maxSpeed} км/год на годину`)
//         }
//        console.log(`їдемо зі швидкістю ${car.maxSpeed} км/год на годину`)
//     })
//
// }
// drive(cars)

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

// function Info(cars){
//     cars.forEach((car)=>{
//         console.log(`model - ${car.model}, company - ${car.company}, year - ${car.year}, maxSpeed - ${car.maxSpeed}, engine - ${car.engine}  `)
//     })
// }
//
// Info(cars)


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed


// function increaseMaxSpeed(cars,newSpeed){
//         cars.forEach((car)=>{
//             car.maxSpeed=newSpeed
//
//         } )
// }
// increaseMaxSpeed(cars,'260')
// console.log(cars)




// -- changeYear (newValue) - змінює рік випуску на значення newValue


 // function changeYear(cars,changeYear){
 //         cars.forEach((car)=>{
 //             car.year=changeYear
 //
 //         } )
 // }
 // changeYear(cars,'2005')
 // console.log(cars)



// addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// let driverInfo={
//     name: 'Sergiy',
//     age:36,
//
// }
//
// cars[0].addDriver(driverInfo)
// console.log(cars[0])
//
//





// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

//
// class Car{
//     constructor(model,company,year,maxSpeed,engine) {
//         this.model = model
//         this.company = company
//         this.year = year
//         this.maxSpeed = maxSpeed
//         this.engine = engine
//         this.driver=null
//          this.addDriver=function (driver){
//          this.driver=driver
//      }}
// }
//
//
//
// let cars=[
//      new Car('BMW','Germany','1986','180','2.0'),
//      new Car('Mercedes','Germany','2005','250','3,0'),
//      new Car('Volkswagen','Germany','2007','230','2,0'),
//      new Car('Opel','Germany','2001','199','2,5'),
//      new Car('Audi','Germany','2018','300','1,9'),
//      new Car('Toyota','Japan','2008','240','4,0'),
//      new Car('Citroen','France','2012','150','1,6'),
//      new Car('Mazda','Japan','2007','215','2,0'),
//      new Car('Ford','USA','1999','200','5,0'),
//      new Car('Kia','China','2014','140','1,4')
//  ]

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//
//      function drive(cars){
//      cars.forEach((car)=>{
//          if (car.model==='Ford'){ // Це просто для себе зробив щоб звернутися конкретно до авто
//              console.log(`Швидкість ${car.model} ${car.maxSpeed} км/год на годину`)
//          }
//         console.log(`їдемо зі швидкістю ${car.maxSpeed} км/год на годину`)
//      })
//
//  }
//  drive(cars)
//
//
// // -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//
//  function Info(cars){
//      cars.forEach((car)=>{
//          console.log(`model - ${car.model}, company - ${car.company}, year - ${car.year}, maxSpeed - ${car.maxSpeed}, engine - ${car.engine}  `)
//      })
//  }
//
//  Info(cars)


// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

 //     function increaseMaxSpeed(cars,newSpeed){
 //         cars.forEach((car)=>{
 //             car.maxSpeed=newSpeed
 //
 //         } )
 // }
 // increaseMaxSpeed(cars,'260')
 // console.log(cars)
 //



// -- changeYear (newValue) - змінює рік випуску на значення newValue

// function changeYear(cars,changeYear){
//         cars.forEach((car)=>{
//             car.year=changeYear
//
//         } )
// }
// changeYear(cars,'2005')
// console.log(cars)



// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


// let driverInfo={
//      name: 'Sergiy',
//      age:36,
//
//  }
//
//  cars[0].addDriver(driverInfo)
//  console.log(cars[0])
//


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.



 //
 //
 //
 // let cinderellas=[
 //     {name: 'vika',age:'18',size:'36'},
 //     {name: 'alina',age:'30',size:'38'},
 //     {name: 'masha',age:'29',size:'39'},
 //     {name: 'ivanka',age:'27',size:'40'},
 //     {name: 'olena',age:'28',size:'39'},
 //     {name: 'antonina',age:'24',size:'38'},
 //     {name: 'maryna',age:'23',size:'37'},
 //     {name: 'svitlana',age:'21',size:'36'},
 //     {name: 'renata',age:'25',size:'35'},
 //     {name: 'izabella',age:'19',size:'36'}
 //
 //     ]

console.log(cinderellas)


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

// class Prince {
//     constructor(name, age, findShoes) {
//         this.name = name;
//         this.age = age;
//         this.findShoes = findShoes;
//     }
// }
//
//
//
// let prince = new Prince('Stepan', 27, 37);
//
// let foundCinderella = null;
// for (let i = 0; i < cinderellas.length; i++) {
//     if (cinderellas[i].size === prince.findShoes) {
//         foundCinderella = cinderellas[i];
//         break;
//     }
// }
//
// if (foundCinderella) {
//     console.log(`Принц ${prince.name} знайшов ${foundCinderella.name} туфельку`);
// } else {
//     console.log(`Принц ${prince.name} не знайшов туфельку`);
// }


//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку