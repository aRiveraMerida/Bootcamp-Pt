//Condicionales

const name = "Bruce";

if (name === "Bruce") {
  console.log("Es Batman");
} else {
  console.log("Pues este no es Batman");
}

//

let surname;

if (surname === undefined) {
  console.log("Surname es undefined");
}

//

const myAge = -1;

if (myAge < 18) {
  console.log("Eres menor de edad");
} else if (myAge === 18) {
  console.log("Tienes 18 años");
} else if (myAge > 18) {
  console.log("Eres adulto");
} else if (myAge > 70 && myAge < 100) {
  console.log("Eres muy mayor");
} else if (myAge > 100) {
  console.log("Cuidado con la salud");
} else {
  console.log("No entiendo esta edad");
}

//Operadores logicos
const bajarLaBasura = false;
const limpiarLaCasa = true;

const puedoSalir = bajarLaBasura || limpiarLaCasa;
console.log(puedoSalir);

const tengoCarnet = true;
const tengoCoche = false;

const puedoConducir = tengoCarnet && tengoCoche;
console.log(puedoConducir);

//

const heAProbado = true;

if (!heAProbado) {
  console.log("Vas a septiembre");
} else if (heAProbado) {
  console.log("Enhorabuena");
}

//TERNARIOS
const age = 18;

const puedoEntrarAlConcierto =
  age >= 18 ? "Puedes entrar al concierto" : "Esperate a tener 18";
console.log(puedoEntrarAlConcierto);

/* if(age >= 18){
    return "Puedes entrar al concierto"
} else{
    return "Esperate a tener 18"
} */

//SWITCH
//Esto se usa si el objetivo del condicional es solamente un elemento para compararlo con igualdad estricta
const superhero = "Spider-Man";

switch (superhero) {
  case "Spider-Man":
    console.log("Su nombre real es Peter Parker");
    break;
  case "Daredevil":
    console.log("Su nombre real es Matt Murdock");
    break;
  case "Hulk":
    console.log("Su nombre real es Bruce Banner");
    break;
  default:
    console.log("No se quién es");
    break;
}

const alimento = "Patata";

switch (alimento) {
  case "Patata":
  case "Galletas":
  case "Cerveza":
  case "Pipas":
    console.log("Esto es mi dieta mediterranea");
    break;
  default:
    console.log("Esto es comida de verdad");
    break;
}

/* if (
  alimento === "Patata" ||
  alimento === "Galletas" ||
  alimento === "Cerveza" ||
  alimento === "Pipas"
) {
  console.log("Esto es mi dieta mediterranea");
} else {
  console.log("Esto es comida de verdad");
}
 */
