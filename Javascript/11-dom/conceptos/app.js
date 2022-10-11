console.log('APP listen in index.html')


// Recover elements HTML
const recoverGreeting = document.querySelector('#greting');
console.log(recoverGreeting);

const recoverList = document.querySelector('.list');
console.log(recoverList);

// 1: cuando hacemos un querySelector -> te devuelve el primero que encuentra
const recoverItem = document.querySelector('.item');
console.log(recoverItem);


const recoverAllItems = document.querySelectorAll('.item');
console.log(recoverAllItems);

// Create elements HTML 

let newP = document.createElement('p');
console.log(newP)
let textP = document.createTextNode('Hola estudiantes');
console.log(textP)
// add text in p -> children
newP.appendChild(textP);
console.log(newP)
// add text in p -> insert in html
newP.innerHTML += 'Me han añadido vía inner';

// Add elements HTML
const contianerDiv = document.querySelector('#container');
contianerDiv.appendChild(newP);