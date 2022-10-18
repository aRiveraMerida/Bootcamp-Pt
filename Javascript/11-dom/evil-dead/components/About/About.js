import { data } from "../../data";
//Destructuramos el objeto about que hay dentro de data para poder usarlo directamente y no tener que hacer un data.about.title...
const { about } = data;

export const About = () => {
  //Recuperamos la sección del html donde queremos insertar código
  const aboutSection = document.querySelector("#about");
  //Creamos los dos elementos que vamos a insertar en la sección
  const logo = document.createElement("img");
  const synopsis = document.createElement("p");

  //Aqui estamos modificando la imagen para ponerle el src y alt
  logo.src = about.logo;
  logo.alt = "Logo de The Evil Dead";

  //Estamos rellenando de contenido de texto el parrafo sinopsis
  synopsis.textContent = about.synopsis;

  //Ahora que tenemos todo modificado, podemos inyectarle a la sección los hijos
  aboutSection.appendChild(logo);
  aboutSection.appendChild(synopsis);
};
