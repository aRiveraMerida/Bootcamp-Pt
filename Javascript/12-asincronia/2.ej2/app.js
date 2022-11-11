//Obtenemos las peliculas de manera asíncrona y les pasamos las peliculas a la funcion que las mapea
const getMovies = async () => {
  const data = await fetch("https://starwars-server.vercel.app/movies");
  const json = await data.json();
  const movies = json.data.movies;
  //Arrancamos la función del mapeo y le pasamos las peliculas en json
  mapMovies(movies);
};

//Mapeamos la lista
const mapMovies = (moviesList) => {
  //Creamos un nuevo array con ciertas propiedades gracias a map
  const mappedMovies = moviesList.map((movie) => ({
    title: movie.name,
    year: movie.year,
    poster: movie.poster,
    background: movie.background,
  }));
  //Ejecutamos la función que las pinta pasandole las peliculas mapeadas
  printMovies(mappedMovies);
};

const printMovies = (movies) => {
  //Recuperamos el contenedor de html donde volcar las peliculas
  const container = document.querySelector("#movies-container");
  //Por cada una de las peliculas creamos un figure, le ponemos un fondo diferente a cada uno gracias al .style, y un innerHTML con los elementos que queramos
  for (const movie of movies) {
    const figure = document.createElement("figure");
    figure.style.backgroundImage = `url(${movie.background})`;
    figure.innerHTML = `
        <div>
        <h2>${movie.title} - ${movie.year}</h2>
        <img src=${movie.poster} alt=${movie.title} referrerpolicy="no-referrer" />
        </div>
        `;
    //Dentro del bucle iremos inyectando estos figure dentro del contenedor
    container.appendChild(figure);
  }
};

//Lo único que ejecutamos es getMovies que es el punto de arranque del resto de funciones como si fuera un "domino"
getMovies();
