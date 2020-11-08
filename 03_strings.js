// * Строки
// const name = 'Bohdan'
// const age = 20

// function getAge() {
// 	return age
// }
// const output = 'Привет, меня зовут ' + name + ' и мой возраст ' + age + ' лет'
// const output =  `Привет, меня зовут ${name} и мой возраст ${age} лет`
// console.log(output);
// const output = `
// 	<div>This is div</div>
// 	<p>This is p</p>
// `
// console.log(output)

// const name ='Bohdan'
// console.log(name.length)
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.charAt(2)); // ? h
// console.log(name.indexOf('o')); // ? 1
// console.log(name.startsWith('Boh')); // ? true
// console.log(name.endsWith('an')); // ? false
// console.log(name.repeat(3)); // ? BohdanBohdanBohdan
// const string = '    password    '
// console.log(string.trim());
// console.log(string.trimLeft());
// console.log(string.trimRight());

function logPerson(s, name, age) {
	if (age < 0) {
		age = 'Not birth yet'
	}
	return `${s[0]}${name}${s[1]}${age}${s[2]}`;
}
const personName = 'Bohdan'
const personName2 = 'Maksim'
const personAge = 20
const personAge2 = -1
const output = logPerson`Name: ${personName}, age: ${personAge}!`
const output2 = logPerson`Name: ${personName2}, age: ${personAge2}!`

console.log(output);
console.log(output2);