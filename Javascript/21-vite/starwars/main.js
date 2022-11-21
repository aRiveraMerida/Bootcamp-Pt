import "./style.css";

const container = document.querySelector("#app");
const btn = document.querySelector("button");
const charactersAnchor = document.querySelector("#characters");
const locationsAnchor = document.querySelector("#locations");
const droidsAnchor = document.querySelector("#droids");

let dataList = [];
let page = 1;
let destination = "characters";

const getData = async () => {
  const data = await fetch(
    `https://starwars-databank.vercel.app/${destination}?page=${page}&limit=10`
  );
  const json = await data.json();
  dataList = [...dataList, ...json[`${destination}`]];
  mapData(dataList);
};

const mapData = (list) => {
  const mappedData = list.map((item) => ({
    name: item.name,
    description: item.description,
    image: item.image,
  }));
  printData(mappedData);
};

const printData = (list) => {
  container.innerHTML = "";
  for (const item of list) {
    const figure = document.createElement("figure");
    figure.innerHTML = `
    <img src=${item.image} alt=${item.name}/>
    <h3>${item.name}</h3>
    <div>
    <p>${item.description}</p>
    </div>
    `;
    container.appendChild(figure);
  }
};

//MORE BUTTON
btn.addEventListener("click", () => {
  page++;
  getData();
});

charactersAnchor.addEventListener("click", () => {
  dataList = [];
  destination = "characters";
  page = 1;
  getData();
});
locationsAnchor.addEventListener("click", () => {
  dataList = [];
  destination = "locations";
  page = 1;
  getData();
});
droidsAnchor.addEventListener("click", () => {
  dataList = [];
  destination = "droids";
  page = 1;
  getData();
});

getData();
