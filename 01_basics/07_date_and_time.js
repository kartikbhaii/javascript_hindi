// Date in JAVASCRIPT

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toLocaleString())
// console.log(typeof myDate)

// let myCreatedDate = new Date(2023, 0, 26, 5, 3)
let myCreatedDate = new Date("01-14-2025")
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.toDateString()) 
// console.log(myCreatedDate.toLocaleString())
// console.log(myCreatedDate.getDay());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log() //  dividing by 1000 convert "millisecond" in "second"
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDate())
console.log(newDate.getDay())

// TO WRITE FULL TIME AND DATE
console.log(`the date is: ${newDate.getDate()} and Time is ${newDate.getTime()}`)

newDate.toLocaleString('default', {
    weekday: "long"
})

