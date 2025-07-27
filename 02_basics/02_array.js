
const marvel_heroes = ["ironman", "thor", "spiderman"]
const dc_heroes = ["batman", "superman", "flash"]

// --------------------------- HOW TO ADD BOTH ARRAY IN ONE ARRAY -------------------------------//

marvel_heroes.push(dc_heroes) 
console.log(marvel_heroes); // print marvel array aur unske andar hi it prints dc heroes array as an element.

// ------------------------- (1) USING CONCAT METHOD ----------------------------//

const newArr = marvel_heroes.concat(dc_heroes) // concat returns new array
console.log(newArr)

// ------------------ (2) USING SPREAD OPERATOR (EASY METHOD TO ADD ARRAYS)-----------------//

const all_heroes = [...marvel_heroes, ...dc_heroes] // syntax: 3 dots and then array name "...arrayname"
console.log(all_heroes)

// --------------------------------------------------

const another_array = [1,2,3,[4,5,6], 7, [6,7,[4,5,6]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array)



console.log(Array.isArray("Kartikey")) // array: "isArray" method

console.log(Array.from("Kartikey")) // array: "from" method
console.log(Array.from({name: "Kartikey"})) // intresting => prints empty array

/*********************read about array methods: isArray, from, of , etc *******************/

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3 )) // array: "of" method
