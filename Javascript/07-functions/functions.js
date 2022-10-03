//Funciones

//Declaramos una función
//1º nombre
//2º entre los paréntesis indicamos los argumentos
//3º entre las llaves, el código a ejecutar
function saludador() {
  console.log("Hola");
}

//Ejecutamos la función
saludador();
saludador();

//Argumentos -> Le podemos dar valores iniciales a los argumentos.
//Si no sustituimos los valores iniciales, los tomará como valores definitivos
function sumNumbers(numberA, numberB = 10) {
  console.log(numberA + numberB);
}

sumNumbers(2, 5);
sumNumbers(234, 578);
sumNumbers(1);
sumNumbers("Hola ", "Pepito");

//
function saludadorPremium(name) {
  if (name === undefined) {
    console.log("Oye, mete un nombre por lo menos");
  } else {
    console.log("Buenas tardes " + name);
  }
}

saludadorPremium("Paco");
saludadorPremium();
//
function ageCalculator(actualYear, bornYear, name) {
  if (
    actualYear === undefined ||
    bornYear === undefined ||
    name === undefined
  ) {
    console.log("Te falta algún dato");
  } else if (typeof actualYear !== "number" || typeof bornYear !== "number") {
    console.log("En las edades mete un numero");
  } else if (typeof name !== "string") {
    console.log("En el nombre mete un string");
  } else {
    const age = actualYear - bornYear;
    console.log("Hello " + name + ", your age is: " + age);
  }
}

ageCalculator(2022, 1990, "Antonio");
ageCalculator(2022, 1869, "RoboGhandi");
ageCalculator("dosmildos", 1990, "Paco");
ageCalculator(2022, 1990, 4);

//

function calculadorDeVicio(hours, name) {
  if (hours > 100 && hours <= 500) {
    console.log(name + ", te gusta mucho este videojuego");
  } else if (hours > 500 && hours <= 1000) {
    console.log(name + ", tienes que ser un campeón ya");
  } else if (hours > 1000) {
    console.log(name + ", pide ayuda urgente");
  } else {
    console.log("No computa");
  }
}
calculadorDeVicio(2000, "Jose Manuel");

//RETORNO -> lo normal, es que tenga un retorno para poder sacar lo que sea de la función
function multi20(num) {
  const resultado = num * 20;
  return resultado; //Esto es lo que devuelve la función
}

const resultado1 = multi20(20);
console.log(resultado1);
const resultado2 = multi20(3);
console.log(resultado2);

//

function calAge(actualYear, bornYear) {
  const age = actualYear - bornYear;
  return age;
}

const resultadoCalAge = calAge(2022,1990); //Podemos almacenar el retorno de una función en una constante. 
//Por ejemplo, si declaramos una constante y la igualamos a la ejecución de una función, el retorno sera el valor almacenado en dicha constante
console.log(resultadoCalAge)

const isOver18 =
  calAge(2022, 1990) >= 18 ? "Eres mayor de edad" : "Eres menor de edad";

console.log(isOver18);

//

function buenasTardes(name){
    const frase = "Buenas tardes " + name;
    return frase;
}

const saludoPaco = buenasTardes("Paco");
console.log(saludoPaco)