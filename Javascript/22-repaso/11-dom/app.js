const xMenHeroes = [
  "Lobezno",
  "Pícara",
  "Jubilo",
  "Angel",
  "Ciclope",
  "Xavier",
];

const xMenVillains = [
  "Dientes de Sable",
  "Magneto",
  "Mr. Siniestro",
  "Mistica",
  "Apocalipsis",
  "Trask",
];

const init = () => {
  document.body.style.backgroundColor = "black";
  document.body.style.backgroundImage =
    "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a890b611-f7ff-44e1-b21b-8d8586549335/db9ky76-a251c9b7-737b-41c8-b361-347bd7c3c51e.png/v1/fill/w_1024,h_576,q_80,strp/x_men_danger_room_wallpaper_2_by_heypierce_db9ky76-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTc2IiwicGF0aCI6IlwvZlwvYTg5MGI2MTEtZjdmZi00NGUxLWIyMWItOGQ4NTg2NTQ5MzM1XC9kYjlreTc2LWEyNTFjOWI3LTczN2ItNDFjOC1iMzYxLTM0N2JkN2MzYzUxZS5wbmciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19._DqyaUvtrPUOTBUm8eAK9AMfeXKAp8-GHulx-1NIEBY')";
  insertTitle("X-Men");
  insertHeroes(xMenHeroes);
  insertVillains(xMenVillains);
};

const insertTitle = (text) => {
  const h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.textTransform = "uppercase";
  h1.style.color = "yellow";
  document.body.appendChild(h1);
};

const insertHeroes = (list) => {
  const ul = document.createElement("ul");
  ul.style.backgroundColor = "black";
  ul.style.padding = "1rem";
  for (const xmen of list) {
    const li = document.createElement("li");
    li.textContent = "🅧 " + xmen;
    li.style.listStyleType = "none";
    li.style.color = "blue";
    ul.appendChild(li);
  }
  document.body.appendChild(ul);
};

const templateListElement = (item) => `<li>🦹🏻‍♂️ ${item}</li>`;

const insertVillains = (list) => {
  const ul = document.createElement("ul");
  ul.style.backgroundColor = "black";
  ul.style.listStyleType = "none";
  ul.style.color = "crimson";
  ul.style.padding = "1rem";
  for (const item of list) {
    ul.innerHTML += templateListElement(item);
  }
  document.body.appendChild(ul);
};
init();
