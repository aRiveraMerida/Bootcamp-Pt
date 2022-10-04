// Función sin retorno => Modificadora la uso para modicar o transformar un valor generico
let result = 0;
console.log(result);
function suma75() {
  result += 75;
}
let result76 = 0;
const suma76 = () => {
  result76 += 76;
}

suma76();
console.log(result76);
suma75();
console.log(result);
suma75();
console.log(result);
// Función con retorno => Puede que modifique pero su uso es de retornar un valor.
let result2 = 0;
function suma50() {
  return result2 + 50;
}

let result2Arrow = 0;
const suma51 = () => {
  return result2Arrow + 51;
}
let valueReturnArrow = suma51();
console.log(result2Arrow, valueReturnArrow)
let valueReturn = suma50();
console.log(result2, valueReturn);


function calculator(numberA, numberB, numberC) {
  return numberA + numberB + numberC;
}

console.log(calculator(1, 5, 12));

const listName = ["a", "b", "c"];

listName.push("Z");

const listAddX = (list) => {
  let listReturnable = [];
  for (let index = 0; index < list.length; index++) {
    listReturnable.push(list[index] + "X")
  }
  return listReturnable;
}

const listNameWithX = listAddX(listName);

console.log(listName, listNameWithX);