
// PRIMITIVE

// 7 TYPES: String, Number, Boolean, null (means empty, not zero but empty), undefined ( declared but not initialized)
//          Symbol (making unique component), BigInt


const score = 100
const scoreValue = 100.34

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId)
// symbol make unique thats why they are not equal even with the same data

const bigNumber = 51654985451564686465468n

// console.log(bigNumber)



// Reference (NON-PRIMITIVE)

// Array, Objects, Functions


const heroes = ["shaktiman", "naagraj", "ironman"]

let myObj = {
    name: "Kartikey",
    age: 22,
    city: "ballia"
}

// console.log(myObj.name);


const myFunction = function(){
    console.log("Hello World")
}



console.log(typeof score)
console.log(typeof scoreValue)
console.log(typeof isLoggedIn);
console.log(typeof outsideTemp); // type of (null) => object
console.log(typeof userEmail);
console.log(typeof id);
console.log(typeof anotherId);
console.log(typeof bigNumber);
console.log(typeof heroes); // type of array => object
console.log(typeof myObj); // type of object => object
console.log(typeof myFunction); // type of funciton => funciton






