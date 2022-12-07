const name = "Peter";
const surname = 'Parker';
const location = `New York`;
const quote = "He is 'Spider-Man'";
const otherQuote = 'He is "Spider-Man"'


const team = "Rocket";

console.log(team[2]);     // Retorna "c"

console.log(team.length);     // Retorna longitud

const droid = "roger ";

console.log(droid.repeat(5).trim()); // Retorna "roger roger";

console.log(droid.repeat(5).trim().length)
console.log(droid.repeat(5).length)


const quoteIncludes = "To infinity and beyond";

const word = "infinity";

console.log(quoteIncludes.includes(word)); // Retorna true


const age = 30;
const temperature = -5;
const budget = 100.50;


isNaN(true);   // true
isNaN("hola"); // false
isNaN(10);     // false
isNaN("12");   // false

const integer = 10;
const decimal = 12.5;

Number.isInteger(integer); //true
Number.isInteger(decimal); //false

const ageParse = "18";
const ageToNumber = parseInt(ageParse);
console.log(ageToNumber);
// Retorna 18 en formato number

const budgetFloated = "1.250";
const budgetInFloat = parseFloat(budgetFloated);
console.log(budgetInFloat);
// Retorna 1.25 en número decimal


let num = 255;
console.log(num.toString(16));  // ff
console.log(num.toString(2));   // 11111111