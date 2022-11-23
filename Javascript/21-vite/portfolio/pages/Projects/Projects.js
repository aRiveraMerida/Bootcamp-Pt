import "./Projects.css";
import { cleanPage } from "../../utils/cleanPage";
import { projects } from "../../data/projects";

export const Projects = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="projects">
    <p>Featured Projects</p>
    <div class="projects-container"></div>
    </section>`;
  const container = document.querySelector(".projects-container");
  for (const project of projects) {
    const figure = document.createElement("figure");
    figure.innerHTML = `
    <img src=${project.image} alt=${project.title}/>
    <div>
    <h2>${project.title}</h2>
    <div>
    Icons
    </div>
    <p>${project.description}</p>
    <p>${project.tech.join(" - ")}</p>
    </div>
    `;
    container.appendChild(figure);
  }
};
