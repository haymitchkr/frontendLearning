//* First
// const massiv = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]
// const sqrtSum = massiv.filter(num =>num %2 === 0).map(num => Math.sqrt(num)).reduce((accumulator, a) => accumulator + a)
// console.log(sqrtSum);
//* First end
//* small ex
//? 1
// const str = 'hi'
// console.log(typeof str);
// const num = 123
// console.log(typeof num);
// const flag = true
// console.log(typeof flag);
// const txt = 'true'
// console.log(typeof txt);
//? 2
// let a1 = 5 + 3
// let a2 = 5 - 3
// let a3 = 5 * 3
// let a4 = 5 / 3
// let a5 = 5 % 3
// let a6 = 3 % 5
// let a7 = 5 + '3'
// let a8 = '5' + 3
// let a9 = 75 + "kg"
//? 3 
// const height = 23
// const width = 10
// const s = height *  width
//? 4
// const heightC = 10
// const dc = 4
// const v = Math.PI * ((dc / 2)**2) * heightC
// console.log(v);
//? 5 
// const n = 3
// const m = 4
// const k = Math.sqrt((n**2 + m**2))
// console.log(k);
//? 6
// const m = 50
// let n
// if(m > 25){
// 	n = 'biggest'
// } else{
// 	n = 'smallest'
// }
//? 7
// let num = 45
// while(num <= 67){
// 	console.log(num++);
// }
//? 8 
// let num = 45
// while(num <= 670){
// 	if(num % 10 === 0){
// 		console.log(num);
// 	}
// 	num++
// }
//? 9
// let num
// for(num = 45; num <= 670; num++){
// 	if(num <= 67){
// 		console.log(num);
// 	}else if(num % 10 === 0){
// 		console.log(num);
// 	}
// }
//? 10
// const n = 5
// switch(n){
// 	case 0:
// 		console.log('zero');
// 		break;
// 	case 1:
// 		console.log('one');
// 		break;
// 	case 2:
// 		console.log('two');
// 		break;
// 	case 3:
// 		console.log('three');
// 		break;
// 	case 4:
// 		console.log('four');
// 		break;
// 	case 5:
// 		console.log('five');
// 		break;
// 	}
//? 11
// function hello1(){
// 	return 'Hello, JavaScript'
// }
// console.log(hello1())
//? 12
// function hello2(name){
// 	if(name === undefined){
// 		console.log('Hi, Guest');
// 	} else {
// 		console.log('Hello, ' + name);
// 	}
// }
// hello2()
//? 13
// function mul(n,m){
// 	return n + m
// }
// console.log(mul(5,10));
//? 14
// function repeat(str, n = 2){
// 	let stroke = ''
// 	for(i = 1; i <= n; i++){
// 		stroke += str
// 	}
// 	return stroke;
// }
// console.log(repeat('Hello dude ! '))
//? 15
// function rgb(red = 0, green = 0, blue = 0){
// 	return `rgb(${red},${green},${blue})`
// }
// console.log(rgb(12,35,66));
//? 16
// function getObj(){
// 	return this
// }
// const city1 = {
// 	name: 'Cityzen',
// 	population: 1e7,
// 	getName(){
// 		return this.name
// 	},
// 	exportStr(){
// 		return `name=${this.name} population=${this.population}`
// 	}
// }
// const city2 = {
// 	name: 'CityN',
// 	population: 1e6,
// 	getName(){
// 		return this.name
// 	},
// 	exportStr(){
// 		return `name=${this.name} population=${this.population}`
// 	},
// 	getCity(){
// 		getObj()
// 	}
// }

// city1.getName()
// city2.getName()
// console.log(city1.exportStr());
// console.log(city2.exportStr(), city2.getCity(this));
//? 17
// const obj = {
// 	method1(){
// 		return this
// 	},
// 	method2(){
// 		return this
// 	},
// 	method3(){
// 		return 'метод3'
// 	}
// }
// obj.method1().method2().method3()
// console.log(obj.method1().method2().method3());
//? 18
// const d1 = [45,78,10,3]
// d1[7] = 100
// console.log(d1,d1[6],d1[7]);
// const d2 = [45,78,10,3]
// const d3 = [45,78,10,3]
// const d4 = [45,78,10,3]
// d3[7] = 100
// let sumd2 = 0
// let sumd3 = 0
// function sumCalcualte(sum, massive) {
// 	for(i = 0; i < massive.length; i++) {
// 		sum += d2[i]
// 	}
// 	console.log(sum);
// }
// sumCalcualte(sumd2, d2)
// for (key in d3){
// 	sumd3 += d3[key]
// }
// console.log(sumd3);
// function my(a,b){
// 	return b - a
// }
// d4.sort(my)
// console.log(d4);

//? Двумерные массивы
// let dblmas = [
// 	[1,2,3],
// 	[4,5,6],
// 	[7,8,9],
// ]
// let out = ''

// console.log(dblmas);
// for (let i = 0; i < dblmas.length; i++){
	// console.log(dblmas[i]);
	
	// let c = dblmas[i]
	// for ( let k = 0; k < c.length; k++){
	// 	console.log(c[k]);
	// }
	// for ( let k = c.length - 1; k >= 0; k--){
	// 	console.log(c[k]);
	// }
// for (let i = 0; i < dblmas.length; i++){
// 	for (let k = 0; k < dblmas[i].length; k++){
// 		console.log(dblmas[i][k]);
// 		out += dblmas[i][k] + ' '
// 	}
// 	out += '<br>'
// }
// document.querySelector('.out').innerHTML = out
// out = ''
// for (let i = 0; i < dblmas.length; i++){
// 	for (let k = 0; k < dblmas[i].length; k++){
//			 console.log(dblmas[i][k])
// 		if (dblmas[i][k] > 4){
// 			out += dblmas[i][k] + ' '
// 		}
// 	}
// 	out += '<br>'
// }
// console.log(out);

// let d = [1,0,0,0,0];
// document.querySelector('.out2').innerHTML = d
// let k = 0
// document.querySelector('button').onclick = () => {
// 	if (k + 1 < 5){
// 		d[k] = 0
// 		d[k + 1] = 1
// 		k++
// 	} else {
// 		d[k] = 0
// 		k = 0
// 		d[k] = 1
// 	}
// 	document.querySelector('.out2').innerHTML = d
// }
// * Создание двумерного массива с заданным коливеством элементов
//? n количество элементов массива
//? m количество элементов внутри элемента массива
//? s значение элемента
const massive = []
function massiveCreate(n = 3,m = 4,s = 0){
	let mIndex = []
	for(let i = 0; i <= m - 1; i++){
		mIndex.push(s)
	}
	for (let i = 0; i <= n - 1; i++){
		massive.push(mIndex)
	}
}
//? Создаём массив
massiveCreate(3,4,5)
//? Вывод массива в консоль
console.log(massive)
for (let i = 0; i < massive.length; i++){
	for(let k = 0; k < massive[i].length; k++){
		console.log(massive[i][k])
	}
}