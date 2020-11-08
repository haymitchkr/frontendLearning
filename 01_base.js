// alert('hello')
// * 1. Переменные varible -------

// var name = 'Bohdan' // ! var dont use
// const lastName = 'Kravtsov' // * string
// let age = 26 // * number
// const isProgrammer = true // * boolean
// ? camelCase --- posible name
// const firstName ='Bohdan'
// const _ = 'private'
// const $ = 'some value'
// const if = 'mkef' // ! error. dont use reserved words
// todo testing ---
// name = 'Bodya'
// age = 20
// console.log(name + ' ' + lastname + ' is ' + age)

// * 2. Мутирование ------
// const firstName = 'Bohdan'
// const age = 20
// console.log('Имя человека : ' + firstName + ', а возраст человека: ' + age) // ? age.toString 
// alert('Имя человека : ' + firstName + ', а возраст человека: ' + age) // ? alert working only on browser

// const lastName = prompt('Введите фамилию')
// alert(firstName + ' ' + lastName)
// * 3. Операторы ------
// const currentYear = 2020
// const birthYear = 2000

// const age = currentYear - birthYear
// console.log(age)

// const a = 10
// const b = 5
// let c = 20
// let d = 32

// console.log(a + b)
// console.log(a - b)
// console.log(a * b)
// console.log(a / b)
// console.log(c) // 20
// console.log(c++) // 20
// console.log(++c) // 22
// d = d + a // ? indent
// d += a // ? ident 
// d += a
// d -= a
// d *= a
// d /= a
// console.log(d)

// * 4. Основные типы данных --------
// const isProgrammer = true
// const name = 'Bohdan'
// const age = 20
// let x

// console.log(typeof isProgrammer) // ? boolean
// console.log(typeof name) // ? string
// console.log(typeof age) // ? number
// console.log(typeof x) // ? undefined
// console.log(null) // ? null
// console.log(typeof null) // ! object

// * 5. Приоритет операторов ------
// const fullAge = 20
// const birthYear= 2000
// const currentYear = 2020
// * > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // ? 20 >= 20 => true	
// console.log(isFullAge) 

// * 6. Условные операторы -----
// const courseStatus = 'ready' // ready, fail ,pending

// if (courseStatus === 'ready') {
// 	console.log('Курс уже готов и его можно проходить')
// } else if (courseStatus === 'pending') {
// 	console.log('Курс пока находится в процессе разработки')
// } else { 
// 	console.log('Курс не получился')
// }

// const isReady = false
// if (isReady) {
// 	console.log('Все готово')
// } else {
// 	console.log('Все не готово')
// } // ? ident
// * Тернарное выражение
// isReady ? console.log('Все готово') : console.log('Все не готово') // ? ident
// const num1 = 42 // number
// const num2 = '42' // string
// console.log(num1 == num2) // ! true 
// console.log(num1 === num2) // * false

// * 7. Булевая логика -----
	// * Логические операторы

// * null => false
// * NaN => false
// * 0 => false
// * empty string ("") => false
// * undefined => false

// * && - and
// ? true && true => true 
// ? true && false => false
// ? false && true => false
// ? false && false => false
// ? false && true || true  ==> true
// ? false && (true || true) ==> false

// ? a1 = true && true ==> true
// ? a2 = true && false ==> false
// ? a3 = false && true ==> false
// ? a4 = false && (3 == 4) ==> false
// ? a5 = 'Cat' && 'Dog' ==> 'Dog'
// ? a6 = false && 'Cat' ==> false
// ? a7 = 'Cat' && false ==> false
// * || - or
// ? true || true => true
// ? true || false => true
// ? false || true => true
// ? false || false => false

// ? o1 = true || true ==> true
// ? o2 = false || true ==> true
// ? o3 = true || false ==> true
// ? o4 = false || (3 == 4) ==> false
// ? o5 = 'Cat' || 'Dog' ==> 'Cat'
// ? o6 = false || 'Cat' ==> 'Cat'
// ? o7 = 'Cat' || false ==> 'Cat'
// * ! - not
// ? n1 = !true => false
// ? n2 = !false => true
// ? n3 = !"cat" => false

// * Правила преобразования
// ? Конвертирование И в ИЛИ
// bCondition1 && bCondition2 = !(!bCondition1 || !bCondition2)
// ? Конвертирование ИЛИ в И
// bCondtion1 || bCondition2 = !(!bCondition1 && !bCondition2)
// ? Конвертирование многих НЕ
// . !! bCondition = bCondition
// ? Удаление вложенных скобок ---
// ? Удаление вложенных И
// bCondition1 || (bCondition2 && bCondition3) = bCondition 1 || bCondition2 && bCondition3
// ? Удаление вложенного ИЛИ
// bCondition1 && (bCondition2 || bCondition3) = !(!bCondition1 || !bCondition2 && !bCondition3)

// * 8. Функции ------

// function calculateAge(year) {
// 	return 2020 - year
// }

// const myAge = calculateAge(2000)
// console.log(myAge)
// console.log(calculateAge(2000))

// function logInfoAbout(name, year) {
// 	const age = calculateAge(year)

// 	if (age > 0){
// 		console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
// 	}
// 	else {
// 		console.log('Вообще-то это будущее')
// 	}
// }
// logInfoAbout('Bohdan', 2000)
// logInfoAbout('Artem', 2001)
// logInfoAbout('Raf', 2022)

// * 9. Массивы -----

// const cars = ['mazda', 'mers', 'ford']
//const cars = new Array('mazda', 'mers', 'ford') // ! possible variatn but dont use it
// console.log(cars)
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[3] = 'mazda' // ! possible but dont use
// cars[cars.length] = 'mazda' 
// console.log(cars)

// * 10. Циклы -----

// const cars = ['mazda', 'mers', 'ford', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
// 	const car = cars[i]
// 	console.log(car)
// }
// for (let car of cars) {
// 	console.log(car)
// }

// * 11. Объекты ------

//const person = new Object({}) // ! possible but dont use
// const person = {
// 	firstName: 'Bohdan',
// 	lastName: 'Kravtsov',
// 	year: 2000,
// 	languages: ['Ru', 'En', 'Uk'],
// 	hasWife: false,
// 	greet: function() {
// 		console.log('greet from person')
// 	}
// }
// console.log(person)
// console.log(person.firstName)
// console.log(person['lastName'])
// const key = 'year'
// console.log(person[key])
// person.hasWife = true
// console.log(person.hasWife)
// person.isProgrammer = true
// console.log(person)
// person.greet()