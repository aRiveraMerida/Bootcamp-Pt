fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then((data) => {
    data.results.map((character) => {
      const div = document.createElement("div");
      div.innerHTML = `
            <h2>${character.name}</h2>
            <h3>${character.status}</h3>
            <img src=${character.image} alt=${character.name} />
        `;
      document.querySelector("#character-container").appendChild(div);
    });
  });
