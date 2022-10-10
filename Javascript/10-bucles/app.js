//LOOPS -> Iterar elementos iterables

//---FOR CLASICO

const movies = [
  "Terminator",
  "Robocop",
  "Bambi",
  "Solo en Casa",
  "Pocahontas",
  "Bracula II",
];
//1º parámetro es crear el iterador -> Normalmente empieza en 0 para recorrer desde la posición 0
//2º parámetro es hasta donde va a dar "vueltas" mi bucle -> condición
//3º parámetro es lo que le vamos a hacer al index cada vez que se cumpla la condición del 2º parámetro

for (let index = 0; index < movies.length; index++) {
  //Creamos una constante llamada movie en cada una de las vueltas en la que almacenaremos el valor de la posición de nuestro array conforme el index cambie
  const movie = movies[index];
  console.log(movie, index);
}

//REPETICIÓN A CAMARA LENTA
//1º ARRANCA EL BUCLE -> index = 0 -> 0 < 5 -> en la siguiente vuelta index++ (en la siguiente es 1)
//const movie = movies[0] -> Terminator -> index = 0 -> Terminator 0

//2ª index = 1 -> 1 < 5 -> en la siguiente vuelta index++ (en la siguiente es 2)
//const movie = movies[1] -> Robocop -> index = 1 -> Robocop 1

//3ª index = 2 -> 2 < 5 -> en la siguiente vuelta index++ (en la siguiente es 3)
//const movie = movies[2] -> Bambi -> index = 2 -> Bambi 2

//4ª index = 3 -> 3 < 5 -> en la siguiente vuelta index++ (en la siguiente es 4)
//const movie = movies[3] -> Solo en Casa -> index = 3 -> Solo en Casa 3

//5ª index = 4 -> 4 < 5 -> en la siguiente vuelta index++ (en la siguiente es 5)
//const movie = movies[4] -> Pocahontas -> index = 4 -> Pocahontas 4

//6ª index = 5 -> 5 !< 5 -> SE ROMPE EL BUCLE

for (let i = 0; i < 10; i++) {
  if (i <= 8) {
    console.log("Hola", i);
  } else {
    console.log("Adios", i);
  }
}

//Ejemplo para sacar cosas de un bucle
const simpsons = [];
const names = ["Bart", "Homer", "Marge", "Lisa", "Maggie"];

for (let i = 0; i < names.length; i++) {
  const name = names[i];
  const fullName = `${name} Simpson`;
  simpsons.push(fullName);
}

console.log(simpsons);

let contador = 0;
const numeros = [1, 34, 543, 239, 2, 8, 19];

for (let index = 0; index < numeros.length; index++) {
  const numero = numeros[index];
  contador += numero; //contador = contador + numero
}

console.log(contador);

//Ejemplo de un bucle dentro de otro bucle
//for (let i = 0; i < array.length; i++) {
//  for (let j = 0; j < loquesea.length; j++) {
//Le tenemos que cambiar el nombre al "index" porque dentro del bucle se puede leer lo del bucle de encima
//  }
//}

//LOS BUCLES QUE VIENEN A CONTINUACION SIRVEN PARA RECORRER EN SU TOTALIDAD LOS ELEMENTOS ITERABLES -> QUE ES LO NORMAL QUE OS VAIS A ENCONTRAR POR AHI

//FOR OF -> DEVUELVE LOS VALORES DE UN ARRAY -> EL INDEX NO ES ACCESIBLE
const series = ["Breaking Bad", "Lost", "Los Soprano", "Farmacia de Guardia"];

for (const serie of series) {
  //Por dentro esta haciendo serie = series[index];
  console.log("La serie se llama:", serie);
}

//FOR EACH -> DEVUELVE LOS VALORES DE UN ARRAY -> EL INDEX ES ACCESIBLE -> LA SINTAXIS ES PARECIDA A LA DE ES6
series.forEach((serie, i) => {
  console.log("La serie se llama:", serie, i);
});

//FOR IN -> DEVUELVE LAS CLAVES -> ES EL BUCLE OPTIMO PARA RECORRER OBJETOS
const band = {
  name: "Mayhem",
  origin: "Norway",
  year: 1992,
  gender: "Black Metal",
};
//Para acceder a los valores tenemos que utilizar corchetes y no punto porque la clave que saca un forin viene en formato string -> NO PUEDO HACER band."name"
for (const key in band) {
  console.log(`La clave ${key}, tiene como valor: ${band[key]}`);
}

//VAMOS A PROBAR A VER QUE PASA SI ITERAMOS CON UN FORIN UN ARRAY
const plantas = ["Rosas", "Margaritas", "Geranios", "Cactuses"];

for (const key in plantas) {
  console.log(`La posición ${key}, tiene como valor: ${plantas[key]}`);
}

//ESTO SE PODRIA HACER CON ES6 DE UNA MANERA MAS CORTA
const personas = ["Alejandro", "Maria", "Jose", "Fran", "Monica"];

const personasConN = [];

for (let index = 0; index < personas.length; index++) {
  const persona = personas[index];
  if (persona.includes("n")) {
    personasConN.push(persona);
  }
}

const personasConNES6 = personas.filter((persona) => persona.includes("n"));

console.log(personasConN);

//FOROF Y FORIN
const personajes = [
  {
    name: "Batman",
    age: 56,
    status: "alive",
  },
  {
    name: "Superman",
    age: 49,
    status: "alive",
  },
  {
    name: "Wonder-Woman",
    age: 50,
    status: "alive",
  },
  {
    name: "Flash",
    age: 28,
    status: "dead",
  },
];

/* for (const personaje of personajes) {
  for (const key in personaje) {
    console.log(personaje[key]);
  }
} */

personajes.forEach((personaje, index) => {
  console.log("Vuelta:", index);
  for (const key in personaje) {
    console.log(personaje[key]);
  }
});
