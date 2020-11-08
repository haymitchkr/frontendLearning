// * 1. Функции -----
// * a) Function Declaration
// greet('Lena')
// function greet(name) {
// 	console.log('Hi - ', name);
// }
// greet('Lena') 
// * b) Function Expression
// greet2('Olya') // ! error. Cannot access 'greet2' before initialization
// const greet2 = function greet2(name){
// 	console.log('Hi - ', name);
// }
// greet2('Olya')
// console.dir(greet)
// * 2. Анонимные функции
// let counter = 0
// const interval = setInterval(function(){
// 	if (counter === 5){
// 		clearInterval(interval)
// 	} else{
// 		console.log(++counter)
// 	}
// }, 1000)

// * 3. Стрелочные функции
// function greet(name){
// 	console.log('Hi ', name);
// }
// greet('Lena)
// const arrow = (name) => {
// 	console.log('Hi ', name);
// }
// arrow('Artem')
// const arrow2 = name => console.log('Hi ', name);

// arrow2('Bohdan')

// const pow2 = num => {
// 	return num ** 2
// }
// const pow2 = num => num**2
// console.log(pow2(5));

// * 4. Параметры по умолчанию
// const sum = (a, b) => a+b
// console.log(sum(41,25)); // ? 66
// console.log(sum(41)); // ? NaN
// const sum = (a= 1, b = 1) => a+b
// console.log(sum(41)); // ? 42
// const sum = (a = 40, b = a*2) => a + b
// console.log(sum()); // ? 120
// function sumAll(...all){
// 	let result = 0
// 	for (let num of all){
// 		result += num
// 	}
// 	return result
// }
// const res = sumAll(1, 2, 3, 4, 5)
// console.log(res);
// * 5. Замыкания 
// function createMember(name){
// 	return function(lastName){
// 		console.log(name + lastName);
// 	}
// }
// const logWithLastName = createMember('Bohdan')
// console.log(logWithLastName('Kravtsov'));
// console.log(logWithLastName('Krava'));