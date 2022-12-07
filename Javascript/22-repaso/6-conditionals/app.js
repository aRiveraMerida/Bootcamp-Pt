const myAge = 19;
const myName = "Jose";

if (myName === "Jose") {
  console.log("Si, soy", myName);
} else {
  console.log("No me llamo Jose");
}

if (myAge === 19) {
  console.log("ok");
}

if (myAge === 19) {
  console.log("Enhorabuena, tienes 19 años");
} else if (myAge >= 18) {
  console.log("Enhorabuena, eres mayor de edad");
} else if (myAge < 18) {
  console.log("Te queda todavia para cumplir 18");
} else {
  console.log("No entiendo tu edad");
}

const primerTrimestre = 6;
const segundoTrimestre = 4;
const tercerTrimestre = 8;

if (primerTrimestre >= 5 && segundoTrimestre >= 5 && tercerTrimestre >= 5) {
  console.log("Has aprobado todas sin problema");
} else if (
  (primerTrimestre >= 5 && segundoTrimestre >= 5) ||
  (segundoTrimestre >= 5 && tercerTrimestre >= 5) ||
  (primerTrimestre >= 5 && tercerTrimestre >= 5)
) {
  console.log("Has aprobado dos trimestres");
} else if (
  primerTrimestre >= 5 ||
  segundoTrimestre >= 5 ||
  tercerTrimestre >= 5
) {
  console.log("Has aprobado al menos un trimestre");
}
