const numberList = [1, 2, 5, 8, 10];

// dada una lista multiplicar sus valores * 2
// const numberListMultiplyTwo = numberList.map(number => number * 2);

const numberListMultiplyTwo = numberList.map((number) => {
  return number === 1 ? number * 8 : number * 2;
});

const userList = [
  {
    name: "Juan",
    age: 41,
    isDeveloper: true,
  },
  {
    name: "Filipe",
    age: 30,
    isDeveloper: true,
  },
  {
    name: "Manolita",
    age: 12,
    isDeveloper: false,
  },
];

// Map mapea información -> transforma la información - te lo devuelve en un nuevo elemento sin modificar el original
const userListMapped = userList.map((user) => {
  if (user.isDeveloper) {
    user.isDeveloper = "Eres un crack del JS";
  } else {
    user.isDeveloper = "Vuelve al cole";
  }
  return user;
});

console.log(userListMapped);

const officers = [
  { id: 54, name: "Capitan Piett" },
  { id: 67, name: "General Veers" },
  { id: 89, name: "Admiral Ozzel" },
  { id: 142, name: "Commander Jerjerrod" },
];

const mappedOfficers = officers.map((officer) => ({
  nombre: officer.name,
  identificacion: officer.id,
}));
console.log(mappedOfficers);

//Literal Strings -> backsticks -> comillas francesas -> al lado de la P `` -> ${}
const firstname = "Peter";
const surname = "Parker";

const fullName = firstname + " " + surname;
const fullNameLS = `${firstname} ${surname}`;
console.log(fullNameLS);

//Template literal
const list =
  "<ul><li>Primero</li><li>Segundo</li><li>Tercero</li><li> " +
  firstname +
  "</li></ul>";

const listLiteral = `
<ul>
  <li>Primero</li>
  <li>Segundo</li>
  <li>Tercero</li>
  <li>${firstname}</li>
</ul>
`;

//Object destructuring
const alumn = {
  name: "Fulano",
  age: 34,
  location: "Guadalajara",
  hobbies: {
    sport: "not now",
    videogames: "yes",
  },
};

const alumnName = alumn.name;
const alumnAge = alumn.age;

console.log(alumnName);
//Destructuramos el objeto en las partes que queramos recuperar
const { name, age } = alumn;

const { sport } = alumn.hobbies;
console.log(name);
console.log(age);
console.log(sport);

//Spread operator -> ...
const heroes = ["Aragorn", "Gandalf", "Frodo", "Gimli"];
const villans = ["Sauron", "Saruman", "Ella", { name: "Paco", age: 79 }];

const characters = [...heroes, ...villans, "Morgoth"];
console.log(characters);

//FIND -> Se va a quedar con la primera coincidencia que le indiquemos como condición
const numArray = [1, 2, 3, 4, 5, 6, 4];

const findFour = numArray.find((num) => num === 4);
console.log(findFour);

const charactersLOTR = [
  { name: "Frodo", role: "Hobbit", age: 15 },
  { name: "Legolas", role: "Elve", age: 659 },
  { name: "Sam", role: "Hobbit", age: 17 },
];

const findHobbit = charactersLOTR.find((character) => character.age > 100);
console.log(findHobbit);

//FILTER -> Filtra la información y desgrana lo que coincida con la condición
const findHobbits = charactersLOTR.filter(
  (character) => character.role === "Hobbit"
);
console.log(findHobbits);

const findHobbitsWithOAndHobbit = charactersLOTR.filter(
  (character) => character.name.includes("o") && character.role === "Hobbit"
);
console.log(findHobbitsWithOAndHobbit);

//REDUCE
const pilots = [
  { id: 10, name: "Poe Dameron", expYears: 14 },
  { id: 2, name: "Temmin", expYears: 20 },
  { id: 7, name: "Tallissan Lintra", expYears: 12 },
];

const totalYears = pilots.reduce(
  (accumulator, pilot) => accumulator + pilot.expYears,
  0 //Este es el valor inicial del acumulador
);

const mediaYears = totalYears / pilots.length;

console.log(totalYears);
console.log(mediaYears);

//EVERY -> Devuelve un booleano si en todos los elementos se cumple la condición
const alimentos = [
  { id: 1, type: "🥬", name: "Heura" },
  { id: 2, type: "🥩", name: "Pollo" },
  { id: 3, type: "🥬", name: "Arrozs" },
];

const isVegan = alimentos.every((alimento) => alimento.type === "🥬");
console.log("¿Es vegetariano el menú?:", isVegan);

//SOME -> Devuelve un booleano si en algunos elementos se cumple la condición
const isSomeVegan = alimentos.some((alimento) => alimento.type === "🥬");
console.log("¿Parte del menú es vegetariano?:", isSomeVegan);

//MEGA-COMBO DE METODOS

//Esta es nuestra tripulación:

const personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//En esta nave solo podrán embarcar los usuarios de la fuerza, los que sean isForceUser
const forceUsers = personnel.filter((person) => person.isForceUser === true);
console.log(forceUsers);
//Me piden desde la centralita que devuelva un array nuevo con el nombre de cada uno de los pasajeros y un total de la puntuación de disparo y pilotaje
const totalScores = forceUsers.map((person) => ({
  name: person.name,
  score: person.pilotingScore + person.shootingScore,
}));
console.log(totalScores);
//El oficial me pide la suma de todas las puntuaciones totales de cada uno de los pasajeros
const total = totalScores.reduce(
  (accumulator, person) => accumulator + person.score,
  0
);
console.log(total);

//SE PUEDE HACER TODO DE GOLPE, PERO 1º NO PODEIS RECUPERAR LOS DATOS INTERMEDIOS 2º SE LEE REGULAR
const comboForceUsers = personnel
  .filter((person) => person.isForceUser === true)
  .map((person) => ({
    name: person.name,
    score: person.pilotingScore + person.shootingScore,
  }))
  .reduce((accumulator, person) => accumulator + person.score, 0);
console.log(comboForceUsers)