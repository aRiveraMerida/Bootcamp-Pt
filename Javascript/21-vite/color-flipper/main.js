import "./style.css";

const COLOR_PALETTE = {
  "#28262C": "Raisin Black",
  "#998FC7": "Blue Bell",
  "#D4C2FC": "Lavender Blue",
  "#F9F5FF": "Magnolia",
  "#14248A": "Resolution Blue",
};

const addOptionToColorPicker = () => {
  const colorPicker = document.querySelector("#color-picker");

  Object.keys(COLOR_PALETTE).forEach((color) => {
    const option = document.createElement("option");
    option.value = color;
    option.innerText = COLOR_PALETTE[color];

    colorPicker.append(option);
  });
};

const addEventListenerToColorPicker = () => {
  const colorPicker = document.querySelector("#color-picker");
  const colorName = document.querySelector("#color-name");
  colorPicker.addEventListener("change", (ev) => {
    const newColor = ev.target.value;
    document.body.style.backgroundColor = newColor;
    colorName.innerText = COLOR_PALETTE[newColor];
  });
};

addOptionToColorPicker();
addEventListenerToColorPicker();

//IDEAS:
//1ª Tener un input de tipo color en vez de un select con options
//2ª Tener un array de fondos de pantalla con texturas o patrones en vez de colores
//3ª Tener un array de personajes y pintar el personaje abajo cuando lo seleccionemos del select