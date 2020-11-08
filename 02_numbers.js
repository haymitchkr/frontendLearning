// *  Number ---

// const num = 42 // * ingtegral
// const float = 42.42 // * float
// const pow = 10e3 // ? 10*10^3 ==> 10000
// console.log(pow)
// console.log('MAX_SAFE_INTEGER ', Number.MAX_SAFE_INTEGER)
// console.log('Math.pow 53 ',Math.pow(2,53)-1)
// console.log('MIN_SAFE_INTEGER ',Number.MIN_SAFE_INTEGER)
// console.log('MAX_VALUE ',Number.MAX_VALUE)
// console.log('MIN_VALUE ',Number.MIN_VALUE)
// console.log('POSITIVE_INFINITY ',Number.POSITIVE_INFINITY)
// console.log('NEGATIVE_INFINITY ',Number.NEGATIVE_INFINITY)
// console.log('2 / 0', 2 / 0)
// console.log(Number.NaN) // ? Not a Number
// console.log(typeof Nan)
// const weird = 2 / undefined
// console.log(Number.isNaN(weird))
// console.log(Number.isNaN(42))
// console.log(Number.isFinite(Infinity))
// console.log(Number.isFinite(42))

// const stringInt = '42'
// const stringFloat = '42.42'
// console.log(stringInt + 2) // 422
// console.log(Number.parseInt(stringInt) + 2) // ? 44 number
// console.log(+stringInt + 2) // ? 44
// console.log(parseInt(stringFloat) + 2) // ? 44
// console.log(parseFloat(stringFloat)+ 2) // ? 44.42
// console.log(+stringFloat + 2) // ? 44.42

// console.log(0.4 + 0.2) // ! 0.6000000000000001
// console.log((2 / 5) + (1 / 5)) // ! 0.6000000000000001
// console.log((0.4 + 0.2).toFixed(1)) // ? 0.6 string
// console.log(+(0.4 + 0.2).toFixed(1)) // ? 0.6 num
// console.log(parseFloat((0.4 + 0.2).toFixed(1))) // ? 0.6 num

// * BigInt

// console.log(90071992547409919999999) // ! 9.007199254740992e+22
// console.log(typeof 90071992547409919999999) // num
// console.log(typeof 90071992547409919999999n) // BigInt
// console.log(90071992547409919999999n - 9007199254740991999999n) // ? 81064793292668928000000n
// console.log(-90071992547409919999999n)
// console.log(90071992547409919999999.23213n) // ! error
// console.log(10n - 4) // ! error (bitInt - int)
// console.log(parseInt(10n) -4) // ? 6 num
// console.log(10n - BigInt(4)) // ? 6n
// console.log(5n / 2n) // ? 2n

// * Math ----

// console.log(Math.E) // ? 2.718281828459045
// console.log(Math.PI) // ? 3.141592653589793

// console.log(Math.sqrt(25)) // ? 5
// console.log(Math.pow(5,3)) // ? 125
// console.log(Math.abs(-42)) // ? 42
// console.log(Math.max(42,12,33,11,422)) // ? 422
// console.log(Math.min(42,12,33,11,422)) // ? 11
// console.log(Math.floor(4.9)) // ? 4
// console.log(Math.ceil(4.9)) // ? 5
// console.log(Math.round(4.9)) // ? 5
// console.log(Math.trunc(4.9)) // ? 4
// console.log(Math.random())

// * 4 Примеры

// function getRandomBetween(min, max){
// 	return Math.floor(Math.random() * (max-min) + min)
// }
// console.log(getRandomBetween(10,42))

