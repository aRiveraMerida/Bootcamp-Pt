import "./Card.css";
import { MovieTitle } from "../MovieTitle/MovieTitle";

export const Card = (item) => `
    ${MovieTitle(item.enTitle, "title", 3)}
    ${MovieTitle(item.jpTitle, "", 3)}
    <img src=${item.poster} alt=${item.enTitle}/>
    <p>${item.description}</p>
`;
