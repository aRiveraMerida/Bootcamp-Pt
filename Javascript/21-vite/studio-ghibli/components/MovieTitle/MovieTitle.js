import "./MovieTitle.css";

export const MovieTitle = (title, cl, size = 3) => `
    <h${size} class=${cl}>${title}</h${size}>
`;
