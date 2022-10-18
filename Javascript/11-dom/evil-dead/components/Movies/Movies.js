import { data } from "../../data";
//Destructuramos movies para usarlo directamente y no tener que hacer un bucle a data.movies
const { movies } = data;

export const Movies = () => {
  //Recuperamos la sección de movies para poder inyectarle el contenido dinamico
  const moviesSection = document.querySelector("#movies");

  //Por cada una de las peliculas...
  for (const movie of movies) {
    //...creamos nodos
    const container = document.createElement("div");
    const title = document.createElement("h2");
    const info = document.createElement("h3");
    const poster = document.createElement("img");
    //Modificamos los nodos
    title.textContent = movie.title;
    info.textContent = `${movie.year} - ${movie.director}`;
    poster.src = movie.poster;
    poster.alt = movie.title;
    //Le inyectamos el div contenedor dichos nodos
    container.appendChild(title);
    container.appendChild(poster);
    container.appendChild(info);
    //A la sección entera en cada una de las vueltas le inyectamos el contenedor terminado
    moviesSection.appendChild(container)
  }
};
