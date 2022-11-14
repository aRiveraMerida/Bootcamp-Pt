/* setTimeout(() => {
  console.log("Hola");
}, 3000);

setInterval(() => {
  console.log("Adios");
}, 1000);

 */

let intervalID;
let segundos = 0;

const imprimirSegundos = () => {
  segundos++;
  console.log("Han pasado " + segundos + " segundos.");
  if (segundos > 5) {
    clearInterval(intervalID);
  }
};

const crearIntervaloDeUnSegundo = () => {
  intervalID = setInterval(imprimirSegundos, 1000);
};

crearIntervaloDeUnSegundo();
