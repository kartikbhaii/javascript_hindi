
// PRIMITIVE AND NON PRIMITIVE

// PRIMITIVE:

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

console.log(bigNumber)



// Reference (NON-PRIMITIVE)

// Array, Objects, Functions


const heroes = ["shaktiman", "naagraj", "ironman"]

let myObj = {
    name: "Kartikey",
    age: 22,
    city: "ballia"
}

console.log(myObj.name);


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



/***************************************************************************/


// Stack (Primitive) , Heap (Non-Primitive)
// stack ke andar jo bhi chize jayengi jaise boolean, integer ... ye sab ko kisi nye variable me store kiya jaye
// to unke copy nye variable me store hote hai, mtlb isme copies banti hain
// heap ke andar jo store hota hai jaise objects... usme copy value nhi milti, usme direct value ka reference milta hai,
// to agar nye variable me heap ka data change kiya jaye to original jagah se bhi change hoga, aur stack me aisa nhi hota


let myYoutubeName = "Kartikey Singh"
let anotherName = myYoutubeName
console.log(anotherName)
console.log(myYoutubeName)

anotherName = "tehri aur code"
console.log(anotherName)
console.log(myYoutubeName)



let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "kartikey@microsoft.com"

console.log(userOne.email)
console.log(userTwo.email)

