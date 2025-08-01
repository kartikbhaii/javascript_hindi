
// singleton


// object literals: how to define objects

const demo_object = {} // this is basic syntax of defining an object


const mySym = Symbol("key1")

const JSuser = {
    name: "Kartikey",
    "fullname": "Kartikey Singh",
    [mySym]: "mykey1",
    age: 22,
    location: "Uttar Pradesh",
    email: "kkartikeysinghh@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}

console.log(JSuser.email) // usual way to access anything from the object 
console.log(JSuser["email"]) // no error way to access anything from the object
// console.log(JSuser.fullname) // can't acces using dot method, error on accessing "fullname"
console.log(JSuser["fullname"]) // no error using square bracket way on accessing "fullname"
// console.log( typeof (JSuser[mySym]))


// We will use dot method for accessing for simplicity
// how to change something in object

JSuser.email = "kartik@google.com"
console.log(JSuser.email)
// IF WE DONT WANT ANYONE TO CHANGE ANY VALUE FROM OBJECT: use freeze()
Object.freeze(JSuser)
// lets try to change our email again after using freeze method in above line
JSuser.email = "kk@microsoft.com"
console.log(JSuser.email) // prints: kartik@google.com; doesnt change after freeze
