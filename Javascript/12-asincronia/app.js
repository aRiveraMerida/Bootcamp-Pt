//Mediante callbacks

const first = (callback) => {
  console.log("Soy el primero");
  callback();
};

const second = () => {
  console.log("Soy el segundo");
};

first(second);

//PROMESAS

const rickAndMortyURL = "https://rickandmortyapi.com/api/character";

//Primero recuperamos la información "cruda" de la URL
fetch(rickAndMortyURL)
  //Y entonces, la respuesta generada (res) me la traduces a json para que sean datos tratables
  .then((res) => res.json())
  //Y entonces esa respuesta una vez traducida a json me la muestras por consola
  .then((res) => console.log(res.results))
  //Con el catch, si hubiera algún error, me lo sacas por un console error
  .catch((err) => console.error("ESTE ES EL ERROR", err));

let characters;

const getCharacters = () => {
  fetch(rickAndMortyURL)
    .then((res) => res.json())
    .then((res) => (characters = res.results))
    .catch((err) => console.error(err));
};

getCharacters();
console.log(characters);

//ASYNC AWAIT

const starWarsURL = "https://starwars-server.vercel.app/movies";

const getMovies = async () => {
  //Esperate a almacenar en datosCrudos la información cruda con el fetch y sigues
  const datosCrudos = await fetch(starWarsURL);
  //Esperate a convertir todos los datos crudos en json dentro de datosEnJSON y sigues
  const datosEnJSON = await datosCrudos.json();
  //Esto se va a ejecutar una vez termine el último await
  console.log(datosEnJSON);
};

getMovies();
