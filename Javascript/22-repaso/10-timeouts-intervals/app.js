setTimeout(() => {
  console.log("Hola, tengo 2 segundos de retraso");
}, 2000);

let segundos = 0;
setInterval(() => {
  segundos++;
  console.log(`Han pasado ${segundos} segundos.`);
}, 1000);
