const person = {
	name: 'Bohdan',
	age: 20,
	isProgrammer: true,
	languages: ['ru', 'en', 'ua'],
	// 'complex key': 'Complex Value',
	// ['key_' + (1 + 3)]: 'Computed Key', // key_4
	greet(){
		console.log('greet from person');
	},
	info() {
		console.info('Information about person:', this.name);
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
// const {name, age: personAge, languages} = person
// console.log(name, personAge, languages);

// for (let key in person){
// 	if (person.hasOwnProperty(key)){
//			console.log(key);
// 		console.log('key:', key);
// 		console.log('value:', person[key]);
// 	}
// }
// const keys = Object.keys(person)
// keys.forEach((key) => {
// 	console.log('key:', key);
// 	console.log('value:', person[key]);
// })

//* Context
// person.info()

const logger = {
	keys(obj) {
		console.log('Object Keys: ', Object.keys(this));
	},
	// keysAndValues(obj) {
	// 	const keys = Object.keys(this)
	// 	keys.forEach((key) => {
	// 		console.log(key,':' ,this[key]);
	// 	})
	// } //* Моё решение
	keysAndValues(){
		Object.keys(this).forEach(key =>{
			console.log(`'${key}': ${this[key]}`);
		})
	}, //* Решение Минина
	// keysAndValues(){
		// const self = this
		// Object.keys(this).forEach(function(key) {
		// 	console.log(`'${key}': ${self[key]}`);
		// })
		// Object.keys(this).forEach(function(key) {
		// 	console.log(`'${key}': ${this[key]}`);
		// }.bind(this))
	// }//? Варианты решения с нюансами. Теряется контекст
	withParams(top = false, between = false, bottom = false){
		if (top) {
			console.log('------ Start ------');
		}
		Object.keys(this).forEach((key, index, array) =>{
			console.log(`'${key}': ${this[key]}`)
			if (between && index !== array.length - 1){
				console.log('------------');
			}
		})
		if	(bottom) {
			console.log('------ End -----');
		}
	}
}


// const bound = logger.keys.bind(person)
// bound()
// logger.keys.call(person)
// const bound = logger.keysAndValues.bind(person)
// bound()
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true,true,true])