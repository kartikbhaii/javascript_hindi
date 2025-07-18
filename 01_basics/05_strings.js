const name = "kartikey singh";
const repoCount = 50;
// console.log(name + repoCount + " Value")

//NOTE: 
// USE NEW FORMAT TO USE STRING USING BACKSTRICK `  `

console.log(`Hello world ${name} and my repo count is ${repoCount}`);

const gameName = new String('kartikey')

// console.log(gameName[0])
// console.log(gameName.__proto__)


// console.log(gameName.length)
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(3))
// console.log(gameName.indexOf('t'))

const newString = gameName.substring(0,4)
console.log(newString)

const anotherString = gameName.slice(-8,4)
console.log(anotherString)

const newStringOne = " singh "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://kartikey.com/kartikey%20singh"
console.log(url)

const urlNew = url.replace('%20', '-')
console.log(urlNew)

console.log(url.includes('kartikey')) //------------- true!!! ---------------//
