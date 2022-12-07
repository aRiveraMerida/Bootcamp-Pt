var myAvenger = new Object();
myAvenger.name = 'Captain America';
myAvenger.power = 80;
myAvenger.creator = 'Stan Lee';

console.log(myAvenger)


let myAvengerModern = {
  name: 'Captain America',
  power: 80,
  creator: 'Stan Lee'
};

console.log(myAvengerModern)
console.log(myAvengerModern.creator)
console.log(myAvengerModern['name'])
let name = 'name'
console.log(myAvengerModern[name])


//---------------//
let batman = {
  nombre: "Bruce",
  apellidos: "Wayne",
  localizacion: "Gotham",
  profesion: "Multimillonario"
}

// Sirve para iterar objectos - No suelo usarlo
for (let key in batman) {
  console.log("Batman tiene la propiedad " + key + " y su valor es " + batman[key])
}

let batmanTwo = {
  nombre: "Bruce",
  apellidos: "Wayne",
  localizacion: "Gotham",
  profesion: "Multimillonario"
}

let keysBatmanTwo = Object.keys(batmanTwo);
console.log(keysBatmanTwo);

for (const key of keysBatmanTwo) {
  console.log("Batman tiene la propiedad " + key + " y su valor es " + batmanTwo[key])
}

function Car(make, model, year, color = "grey") {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

let talon = new Car('Eagle', 'Talon TSi', 1993);
let Volvo = new Car('Volvo', 'XC60', 2022)
let Pegeout = new Car('Pegeout', '208 electric', 2022)
let ford = new Car('Ford', 'Focus', 2021, 'blue')

console.log(talon)
console.log(Volvo)
console.log(Pegeout)
console.log(ford)

function sayNameFunction() {
  console.log('SOY pepa')
}

let objectMethodEx = {
  name: 'pepa',
  speak: function () {
    console.log('bla bla bla')
  },
  sayName: sayNameFunction()
}

objectMethodEx.speak()
objectMethodEx.sayName


var o = {
  a: 7,
  get b() {
    return this.a + 1;
  },
  set c(x) {
    this.a = x / 2;
  }
};

console.log(o.a); // 7
console.log(o.b); // 8 <-- En este punto se inicia el método get b().
console.log(o.b);
o.c = 50;         // <-- En este punto se inicia el método set c(x)
console.log(o.a); // 25


// Dos variables, dos distintos objetos con las mismas propiedades
var fruit = { name: 'apple' };
var fruitbear = { name: 'apple' };

fruit == fruitbear; // devuelve false
fruit === fruitbear; // devuelve false

// Dos variables, un solo objeto
var fruit = { name: 'apple' };
var fruitbear = fruit; // Asigna la referencia del objeto fruit a fruitbear

// Aquí fruit y fruitbear apuntan al mismo objeto
fruit == fruitbear; // devuelve true
fruit === fruitbear; // devuelve true

fruit.name = 'grape';
console.log(fruitbear); // Produce: { name: "grape" }, en lugar de { name: "apple" }


const character = {
  firstName: 'James',
  lastName: 'Bond',
  age: 50,
  code: 007
};

const agent = Object.entries(character);

console.log(agent);

/*Retorna ->
[ 
["firstName", "James"],
["lastName", "Bond"],
["age", 50],
["code", 007]
]
*/

for (const element of agent) {
  console.log(element[0])
}

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};

let listPrices = [
  {
    banana: 1,
    orange: 2,
    meat: 4,
  },
  {
    banana: 1,
    orange: 2,
    meat: 4,
  },
  {
    banana: 1,
    orange: 2,
    meat: 4,
  }
]

// recibe un elemento iterable por parametro
let doublePrices = Object.fromEntries(
  // Object.entries [[key, value], [key, value]]
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
  // map transformar los datos - entry [key, value]
  // retornar dentro [entry[0]- key]
  // retornar dentro [entry[1]- value modificado]
);

console.log(Object.fromEntries(
  // convert prices to array, map each key/value pair into another pair
  // and then fromEntries gives back the object
  Object.entries(prices).map(entry => [entry[0], entry[1] * 2])
))

console.log(doublePrices)


// create function to retunr most expensive price
function mostExpensivePrice(prices) {
  let mostExpensive = 0;
  for (const key in prices) {
    if (prices[key] > mostExpensive) {
      mostExpensive = prices[key]
    }
  }
  return mostExpensive
}