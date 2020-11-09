const person = {
	name: 'Bohdan',
	age: 20,
	isProgrammer: true,
	languages: ['ru', 'en', 'ua'],
	'complex key': 'Complex Value',
	['key_' + (1 + 3)]: 'Computed Key', // key_4
	greet(){
		console.log('greet from person');
	}
}
// console.log(person.name);
// const ageKey = 'age'
// console.log(person[ageKey]);
// console.log(person['complex key']);
// console.log(person);
// person.greet();

// person.age++
// person.languages.push('by')
// console.log(person);
// person['key_4'] = undefined
// console.log(person['key_4']);
// delete person['key_4']
// console.log(person);

// const name = person.name
// const age = person.age
// const languages = person.languages

// const {name, age, languages}= person
const {name, age: personAge, languages} = person
console.log(name, personAge, languages);