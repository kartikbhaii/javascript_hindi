// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeroes = ["shaktimaan", "haatim"]

const arr2 = new Array(1, 2, 3, 4)
console.log(myArr[1])

//********** ARRAY METHODS *********/

myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

myArr.unshift(8)
myArr.unshift(9)
myArr.shift()
myArr.shift()
console.log(myArr)

console.log(myArr.includes(9))
console.log(myArr.indexOf(9))
console.log(myArr.indexOf(3))

console.log(myArr)

console.log(typeof myArr)

const newArr = myArr.join() 

console.log(myArr)
console.log(newArr)


/****************************** slice and splice in javascript *****************************/


console.log("A ", myArr) // original array

let myn1 = myArr.slice(1,3) 
console.log(myn1)            // using slice
console.log("B ", myArr)    // original array doesnt change.

let myn2 = myArr.splice(1,3)
console.log(myn2)           // using splice
console.log("C ", myArr)    // original array change in splice.


/* 

NOTE
Slice: when using slice for eg (1,5), it will print from index 1 to index 4, it excludes the last range (here 5).
slice doesn't manipulate the original array

Splice: when using splice for eg (1,5) it will print from index 1 to index 5( it includes the last range) 
and most important: it changes the original array, here: from index 1 to index 5 from original array.
splice changes original array and removes the range part (including last range) from the original array.

*/
