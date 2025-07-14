// console.log(2>1)
// console.log(2<1)
// console.log(2==1)

// console.log("2" > 1)

// console.log("2"===1)

// console.log(2+4-"3"+6-2)

// console.log(null>0)
// console.log(null<0)
// console.log(null>=0)

//NOTE:
// Comparison check(>, <... etc) works different than the equality check ( == )
// comparison opr converts null into zero before comparing so when we checking (null > 0) the null
// gets converted to 0 and checking (0 > 0). so it is giving false as output.
// And equality opr works differently thats why (null>=0) gives true while (null>0) gives false

// console.log(undefined>0)
// console.log(undefined<0)
// console.log(undefined>=0)
// console.log(undefined<=0)

// NOTE:
// comparing undefined to 0 gives false in every case. you can refer to documentation.


console.log("2" === 2) // this 3 equals signs === is called strict check, it check data type also. 
