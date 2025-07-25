let score = "kartikey"

console.log(typeof score) // string
console.log(typeof(score)) // string

let valueInNumber = Number(score)
console.log(typeof valueInNumber)

console.log(valueInNumber);

// NaN unserstand for "Not A Number".


// NOTE:
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0


let isLoggedIn = 1
let inBoolean = Boolean(isLoggedIn)

console.log(inBoolean)

// 1 => true; 0 => false;
// "" : empty string => false
// "kartikey": true

let someNo = 33
let stringNumber = String(someNo)
console.log(stringNumber)
console.log(typeof stringNumber);


// *********************************************** OPERATIONS ********************************************* //



let value = 3
let negValue = -value

console.log(negValue)
console.log(2+3)
console.log(2*2)
console.log(2**5)
console.log(2/3)
console.log(2%5)


let str1 = "Hello"
let str2 = "Kartikey"

let str3 = str1 + " " + str2
console.log(str3)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 2)
console.log(1 + 2 + "2")
console.log( 3 + 4 * 5 % 3);

console.log(true)
console.log(+true)
console.log(+"")

let num1 = num2 = num3 = 2+2

console.log(num1)
console.log(num2)
console.log(num3)

let gameCounter = 100
++gameCounter
console.log(gameCounter)

