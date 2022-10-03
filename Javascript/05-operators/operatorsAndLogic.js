// > mayor que
// < menor que
// >= mayor o igual
// <= menor o igual
// = operador de asignacion
// == operador de igualdad
// === operador de igualdad estricta -> Tiene que coincidir el valor y el tipo
// != operador de desigualdad
// !== operador de desigualdad estricta

// LOGICOS
// && -> AND -> Y
// || -> OR -> O
// ! -> NOT - NO

const myAge = 18;

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
}

// !true => false
// !false => true