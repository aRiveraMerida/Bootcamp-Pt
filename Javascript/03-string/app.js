const sentence = "Batman es el super heroe más sobre valorado de la historia";

const index = 5;

console.log(sentence.charAt(index));

const str1 = "Hello";
const str2 = "World";

const str3 = str1.concat("-", str2);

const str4 = str1 + "-" + str2;

const str5 = `${str1}-${str2}`;

let age = 34;
const numberExample = `Hola soy Alberto ${age + 1}`

console.log(str3);
console.log(str4);
console.log(str5);
console.log(numberExample);

console.log(sentence.endsWith("historia"));
console.log(sentence.startsWith("historia"));

console.log(sentence.includes("super"));


const newSentecen = sentence.replace("Batman", "Deadpool");
console.log(newSentecen);
console.log(sentence);

const simioSentence = "Simio no mata a Simio";

console.log(simioSentence.replaceAll("Simio", "monkey"));

const chorus = "Because Im happy";

console.log(chorus.repeat(2));

console.log(chorus.toUpperCase());

console.log(sentence.indexOf("super"));

const valorado = "valorado";

console.log(sentence.slice(sentence.indexOf("valorado"), sentence.indexOf("valorado") + valorado.length));
console.log(sentence.slice(0, 7));

console.log(sentence.split(' '));

const password = " password ";

console.log(password.trimEnd());


