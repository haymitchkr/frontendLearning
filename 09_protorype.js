//* Prototype
//? Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.
//? JavaScript часто описывают как язык прототипного наследования — каждый объект, имеет объект-прототип, который выступает как шаблон, от которого объект наследует методы и свойства. Объект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее. Это часто называется цепочкой прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.
// const person = {
// 	name = 'Maxim',
// 	age = 25,
// 	greet: function(){
// 		console.log('Greet!');
// 	}
// }
// person.sayHello() //! error 
//person.toString() //? prototype
const person = new Object({
	name: 'Maxim',
	age: 25,
	greet: function() {
		console.log('Greet!');
	}
})
Object.prototype.sayHelllo = function(){
	console.log('Hello');
}

const lena = Object.create(person)
lena.name = 'Elena'

// const str = 'I am string'//
const str = new String('I am string')//? Это происходит за кулисами const str = 'I am String'
