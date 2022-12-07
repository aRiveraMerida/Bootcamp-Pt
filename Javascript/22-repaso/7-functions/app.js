function saludador(name) {
  console.log("Hola", name);
}

saludador("Peter");
saludador("Paco");

/* function ageCalculator(bornYear, actualYear) {
  const age = actualYear - bornYear;
  console.log("Your age is", age);
} */

const ageCalculator = (bornYear, actualYear) => {
  const age = actualYear - bornYear;
  return "Your age is " + age;
};

const result = ageCalculator(1990, 2022);
console.log(result);
console.log(ageCalculator(1800, 2043));

const flipAndAddArray = (list) => {
  list.push("Esta lista está al reves ->");
  return list.reverse();
};

const listOne = [6, 2, 4, 5, 7, 9, 3, 2];
const listTwo = ["Primero", "Segundo", "Tercero"];

const listThree = flipAndAddArray(listTwo);
console.log(flipAndAddArray(listOne));
console.log(listThree);

//

const buscador = (list, keyword) => {
  const found = list.includes(keyword);
  if (found /*found === true*/) {
    console.log(
      `La palabra ${keyword} está en la lista en la posicion ${list.indexOf(
        keyword
      )}`
    );
  } else {
    console.log("La palabra no está en la lista");
  }
};

const listado = ["manzana", "melon", "tomate", "galleta"];
buscador(listado, "tomate");
buscador(listado, "avellana");

//

const eliminaPalabras = (list, palabra) => {
  list.splice(list.indexOf(palabra), 1);
  return list;
};

const palabras = ["ordenador", "cable", "raton", "altavoces"];
eliminaPalabras(palabras, "raton");
console.log(palabras);

//

const customPush = (list, item) => {
  return [...list, item];
};

const numeros = [1, 2, 3];
const nuevosNumeros = customPush(numeros, 4);
console.log(customPush(nuevosNumeros, 5));
