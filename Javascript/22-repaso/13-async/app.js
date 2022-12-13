const container = document.querySelector("#app");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

const BASE_URL = "https://rickandmortyapi.com/api/character";
let pageNum = 1;

/* const getCharacters = () => {
  fetch(`${BASE_URL}?page=${pageNum}`).then((res) => {
    res.json().then((characters) => {
      mapCharacters(characters.results);
    });
  });
  pageNum <= 1
    ? prevBtn.setAttribute("disabled", "true")
    : prevBtn.removeAttribute("disabled");

  pageNum >= 42
    ? nextBtn.setAttribute("disabled", "true")
    : nextBtn.removeAttribute("disabled");
}; */

const getCharacters = async () => {
  const res = await fetch(`${BASE_URL}?page=${pageNum}`);
  const characters = await res.json();
  mapCharacters(characters.results);
  pageNum <= 1
    ? prevBtn.setAttribute("disabled", "true")
    : prevBtn.removeAttribute("disabled");

  pageNum >= 42
    ? nextBtn.setAttribute("disabled", "true")
    : nextBtn.removeAttribute("disabled");
};

const mapCharacters = (characters) => {
  const mappedCharacters = characters.map((character) => ({
    name: character.name,
    image: character.image,
    status: character.status,
  }));
  printCharacters(mappedCharacters);
};

const printCharacters = (characters) => {
  container.innerHTML = "";
  for (const character of characters) {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    const img = document.createElement("img");

    h2.textContent = `${character.name} - ${character.status}`;
    img.src = character.image;
    img.alt = character.name;

    div.appendChild(h2);
    div.appendChild(img);

    container.appendChild(div);
  }
};
getCharacters();

prevBtn.addEventListener("click", () => {
  pageNum -= 1;
  getCharacters();
});

nextBtn.addEventListener("click", () => {
  pageNum += 1;
  getCharacters();
});
