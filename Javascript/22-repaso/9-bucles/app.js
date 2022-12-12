const xMenCharacters = [
  "Lobezno",
  "Pícara",
  "Jubilo",
  "Angel",
  "Ciclope",
  "Xavier",
];

const city = {
  name: "Madrid",
  population: 290375903,
  country: "Spain",
  continent: "Europe",
};

const newXmen = [];

for (let index = 0; index < xMenCharacters.length; index++) {
  const xmen = xMenCharacters[index];
  const newName = xmen + " 2.0";
  newXmen.push(newName);
}

console.log(newXmen);

//FOR OF
for (const xmen of xMenCharacters) {
  console.log("FOROF", xmen);
}

//FOREACH
xMenCharacters.forEach((xmen, i) => console.log("FOREACH", xmen, i));

//FOR IN
for (const key in city) {
  console.log(`La clave ${key} tiene el valor ${city[key]}`);
}
