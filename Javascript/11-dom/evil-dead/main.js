import "./style.css";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Movies } from "./components/Movies/Movies";
import { Footer } from "./components/Footer/Footer";

//Inyectando un template
const header = document.querySelector("#header");
header.innerHTML = Header();

//Ejecutando componentes que ya inyectan internamente nodos
About();
Movies();

//Ejecutando componente que ya inyecta un template en un nodo
Footer();

//Declaramos una funcion que mediante el metodo toggle de classList añade si no esta la clase dark y si esta la elimina
const changeTheme = () => {
  document.body.classList.toggle("dark");
};
//Al elemento con el id themeBtn (boton) le añadimos un evento click que al ejecutarse ejecute la funcion changeTheme
document
  .querySelector("#themeBtn")
  .addEventListener("click", () => changeTheme());
