//Aqui estamos combinando el recuperar un nodo con inyectarle internamente un template string

export const Footer = () => {
  const footer = document.querySelector("#footer");
  footer.innerHTML = `
    <p>The Evil Dead 1982-2022 Copyright© </p>
    `;
};
