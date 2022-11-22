import "./Gallery.css";
import { Card } from "../../components/Card/Card";
import { Spinner } from "../../components/Spinner/Spinner";

const main = document.querySelector("main");

export const Gallery = () => {
  getMovies();
};

const getMovies = async () => {
  try {
    //Antes del fetch queremos que aparezca un Loading
    main.innerHTML = Spinner();
    const data = await fetch("https://ghibliapi.herokuapp.com/films");
    const movies = await data.json();
    mapMovies(movies);
  } catch (error) {
    main.innerHTML = `<h2>GhibliAPI is broken</h2>`;
  }
};

const mapMovies = (list) => {
  const mappedMovies = list.map((item) => ({
    enTitle: item.title,
    jpTitle: item.original_title,
    poster: item.image,
    description: item.description,
  }));

  printMovies(mappedMovies);
};

const printMovies = (list) => {
  main.innerHTML = "";
  const section = document.createElement("section");
  for (const item of list) {
    const div = document.createElement("div");
    div.innerHTML = Card(item);
    section.appendChild(div);
  }
  main.appendChild(section);
};
