import "./style.css";
import { Header } from "./components/Header/Header";
import { Gallery } from "./pages/Gallery/Gallery";
import { Footer } from "./components/Footer/Footer";

const header = document.querySelector("header");
header.innerHTML = Header();
const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Gallery();
