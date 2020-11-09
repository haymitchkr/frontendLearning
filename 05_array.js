// * Массивы
// const cars = ['Mazda', 'Ford', 'BMW', 'Mers']
// const fib = [1, 1, 2 , 3, 5, 8, 13]
// const people = [
// 	{name: 'Bohdan', budget: 4200},
// 	{name: 'Vika', budget: 3500},
// 	{name: 'Artem', budget: 1200}
// ]
// const fib = [1, 1, 2 , 3, 5, 8, 13, '21', true]

// ? Funcktion
// function addItemToEnd(){

// }
// ? Method
// cars.push('Ferrari') //? Добавляем элемент в конец массива
// cars.unshift('Volga') //? Добавлем элемент в начало массива
// cars.shift() //? Убираем первый элемент
// cars.pop() //? Убираем поседний элемент
// const firstItem = cars.shift(); //? Убираем и получаем первый элемент
// const lastItem = cars.pop() //? Убираем и получаем последний элемент
// console.log(firstItem);
// console.log(lastItem);
// console.log(cars);

// console.log(cars.reverse()); //? Реверсирует массив 
// console.log(cars);

// console.log(cars.indexOf('BMW'));
// const index = cars.indexOf('BMW')
// cars[index] = 'Porsche'
// console.log(cars);

// console.log(cars.includes('BMW')) //? Проверяем наличе элемента в массиве , получаем boolean

// const upperCaseCars = cars.map(car => {
// 	return car.toUpperCase()
// })

// console.log(upperCaseCars);
// console.log(cars);

// const pow2Fib = fib.map(num => num ** 2 )
// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)

// const pow2Fib = fib.map(pow2)
// const pow2Fib = fib.map(pow2).map(sqrt)
// const pow2Fib = fib.map(pow2).map(Math.sqrt)

// console.log(pow2Fib);
// const pow2Fib = fib.map(pow2)
//? Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.
// const filterNumbers = pow2Fib.filter(num => {
// 	return num > 20
// })
//? Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
// console.log(pow2Fib);
// console.log(filterNumbers);



// todo Задача 1 с разными вариантами решений
// let findedPerson
// for (const person of people) {
// 	if (person.budget === 3500){
// 		findedPerson = person
// 	}
// }
// console.log(findedPerson);

// const index = people.findIndex( function(person){
// 	return person.budget === 3500
// })
// console.log(people[index]);
// const person = people.find(function(person){
// 	return person.budget === 3500
// })
// const person = people.find(person => person.budget === 3500)
// console.log(person);
// todo Конец задачи 1 

// todo Задача 2
// const text = 'Hi, we learning js'
// const reverseText = text.split('') //? Создаем массив из строки
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText);
// todo Конец задачи 2

// const people = [
// 	{name: 'Bohdan', budget: 4200},
// 	{name: 'Vika', budget: 3500},
// 	{name: 'Artem', budget: 1200}
// ]
// const allBudget = people.reduce((acc, person) => {
// 	if (person.budget > 2000) {
// 		acc += person.budget
// 	}
// 	return acc
// }, 0)
// const allBudget = people
// 	.filter(person => person.budget > 2000)
// 	.reduce ((acc, person) => {
// 		acc += person.budget
// 		return acc
// 	}, 0)
// console.log(allBudget);