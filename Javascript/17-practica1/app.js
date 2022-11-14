const loginInput = document.querySelector("#loginInput");
const loginBtn = document.querySelector("#loginBtn");
const loginSection = document.querySelector("#loginSection");
const logoutBtn = document.querySelector("#logoutBtn");

const myH2 = document.createElement("h2");
myH2.textContent = localStorage.user ? localStorage.user : "No hay user";
loginSection.appendChild(myH2);

const handleLogin = (user) => {
  localStorage.setItem("user", user);
  myH2.textContent = localStorage.user;
};

const handleLogout = () => {
  localStorage.removeItem("user");
  myH2.textContent = "No hay user";
};

loginBtn.addEventListener("click", () => handleLogin(loginInput.value));
logoutBtn.addEventListener("click", () => handleLogout());

//-------

const characterContainer = document.querySelector("#character-container");
const rickInput = document.querySelector("#rickInput");
const rickBtn = document.querySelector("#rickBtn");

const getCharacter = async (character) => {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/?name=${character}`
  );
  const json = await data.json();
  const foundCharacters = json.results;

  printCharacters(foundCharacters);
};

const printCharacters = (characters) => {
  characterContainer.innerHTML = "";
  for (const character of characters) {
    const figure = document.createElement("figure");
    figure.innerHTML = `
        <h3>${character.name}</h3>
        <img src=${character.image} alt=${character.name} />
        `;
    characterContainer.appendChild(figure);
  }
};

rickBtn.addEventListener("click", () => getCharacter(rickInput.value));

//

const movies = [
  {
    title: "The Batman",
    poster:
      "https://posters.movieposterdb.com/22_02/2022/1877830/l_1877830_764432ad.jpg",
  },
  {
    title: "Dune",
    poster:
      "https://posters.movieposterdb.com/21_08/2021/1160419/l_1160419_565d3d10.jpg",
  },
  {
    title: "Interstellar",
    poster:
      "https://posters.movieposterdb.com/15_03/2014/816692/l_816692_284eb9d5.jpg",
  },
  {
    title: "Pulp Fiction",
    poster:
      "https://posters.movieposterdb.com/07_10/1994/110912/l_110912_55345443.jpg",
  },
];

const moviesContainer = document.querySelector("#movies-container");
const moviesInput = document.querySelector("#moviesInput");

const filterMovies = (keyword) => {
  moviesContainer.innerHTML = "";

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(keyword.toLowerCase())
  );

  for (const movie of filteredMovies) {
    const movieDiv = document.createElement("div");
    movieDiv.innerHTML = `
    <h3>${movie.title}</h3>
    <img src=${movie.poster} alt=${movie.title} />    `;

    moviesContainer.appendChild(movieDiv);
  }
};

moviesInput.addEventListener("input", (ev) => filterMovies(ev.target.value));
filterMovies("");