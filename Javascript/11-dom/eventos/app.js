const funcionDelClick = () => {
  console.log("Hola has clicado");
};

const myBtn = document.querySelector("#myBtn");

myBtn.addEventListener("click", (ev) => console.log(ev));

//window.addEventListener("mousemove", (ev) => console.log(ev.clientX));

const myInput = document.querySelector("#myInput");
const inputBtn = document.querySelector("#inputBtn");

//myInput.addEventListener("input", (ev) => console.log(ev.target.value))
inputBtn.addEventListener("click", () => console.log(myInput.value));
