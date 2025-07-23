//**************************** Numbers in JS*****************************************/

const score = 400
console.log(score);


const balance = new Number(100)
console.log(balance);

console.log(balance.toString())
console.log(balance.toFixed(2))

const num1 = 23.8966
console.log(num1.toPrecision(3)) // 23.9

const num2 = 123.8966
console.log(num2.toPrecision(3)); // 124

const hundred = 1000000
console.log(hundred.toLocaleString());


//********************** Mathematics in Javascript ************************************/

console.log(Math);

console.log(Math.abs(-2)) // changes negative value into positive value. positive wont change to negative.

console.log(Math.round(8.5)) // round off to 9
console.log(Math.ceil(4.1)) // ceil means ceiling mtlb agar 4 se upar -> 4.1 bhi hua to it will round off to 5.
console.log(Math.floor(4.9)) // floor means niche, to 4.9 ko bhi round off krke 4 bna dega.

console.log(Math.min(4,5,8,1,9,3,15)) // prints min value
console.log(Math.max(4,5,8,1,9,3,15)) // prints max value 

console.log(Math.random()) // printing random value between 0 and 1
console.log((Math.random()*10)+1) // print random value between 1 and 10 but points bhi print kr raha
console.log(Math.floor((Math.random()*10)+1)) // math.floor lga diya hai to decimal value wont print

// TO guess between some value for eg -> between 10 and 20 :

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1) + min))  // IMPORTANT FORMULA

let random = Math.floor((((Math.random()*20)+1))+10) // WRONG METHOD, it does not print b/w 10 and 20
console.log(random)
