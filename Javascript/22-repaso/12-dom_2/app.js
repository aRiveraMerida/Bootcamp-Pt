const characters = [
  {
    name: "Picara",
    role: "heroe",
    power: "Replica poderes",
  },
  {
    name: "Lobezno",
    role: "heroe",
    power: "Regeneración",
  },
  {
    name: "Magneto",
    role: "villano",
    power: "Magnetismo",
  },
  {
    name: "Mistica",
    role: "villano",
    power: "Mimetismo",
  },
  {
    name: "Deadpool",
    role: "antiheroe",
    power: "De todo un poco",
  },
];

const ul = document.createElement("ul");

for (const character of characters) {
  const li = document.createElement("li");
  li.style.listStyleType = "none";
  if (character.role === "heroe") {
    li.style.color = "blue";
    li.style.fontWeight = "bold";
    li.textContent = ` ${character.name} - ${character.power}`;
  } else if (character.role === "villano") {
    li.style.color = "crimson";
    li.textContent = `🦹🏻‍♂️ ${character.name} - ${character.power}`;
  } else {
    li.style.color = "green";
    li.textContent = `🦸🏻 ${character.name} - ${character.power}`;
  }

  ul.appendChild(li);
}

document.body.appendChild(ul);
