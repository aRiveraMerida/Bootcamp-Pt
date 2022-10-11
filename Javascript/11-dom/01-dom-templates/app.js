const listFruits = ['🍌', '🍑', '🍉'];

const titlePage = 'Bienvenidos a DOM 👋🏼';


const init = () => {
  //1. Disparar la funcionalidad asociada
  addElementToList();
}


const addGreetingToDOM = () => {
  // recuperar el elemento

  // añadirlo al nodo -> llamando a la funcion que itene el template
}

const addElementToList = () => {
  //1. Recupear la lista en la que queremos añadir el elemento
  const list = document.querySelector('#listFruits');
  //2. Recorrer la lista de Frutas
  for (const fruit of listFruits) {
    //3. Añadimos la fruta al elemento recuperado -> la función que devuelve el li
    list.innerHTML += templateFruitList(fruit)
  }
}

const templateFruitList = fruit => `<li>${fruit}</li>`;

init();
