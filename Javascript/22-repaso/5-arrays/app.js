const list = ["string", 12, true, {}, []];
console.log(list.length);
console.log(list[0]);

//FILL
const numbers = [4, 5, 2, 8, 10];
console.log(numbers.fill("😾", 1, 4));

//FLAT
const dimensions = [1, 2, 3, [4, 5, [6, 7]]];
console.log(dimensions.flat(2));

//INCLUDES
const heroes = ["Spiderman", "Dr Strange", "Hulk"];
console.log(heroes.includes("Spiderman"));
console.log(heroes[1].includes("Strange"));

//INDEXOF - LASTINDEXOF
const villains = ["Doom", "Agatha", "Lilith", "Doom"];
console.log(villains.indexOf("Doom"));
console.log(villains.lastIndexOf("Doom"));

//PUSH Y POP
const movies = ["Casino", "Titanic", "Superman"];
movies.pop();
movies.push("Bambi", "Avatar");
console.log(movies);

//SHIFT - UNSHIFT
const shows = ["Breaking Bad", "Better Call Saul", "Dark"];
shows.shift();
shows.unshift("1899");
console.log(shows);

//SLICE
const years = [1990, 2006, 1879, 2013, 2022];
console.log(years.slice(1, 4));

//SORT
const names = ["Carlos", "Andrea", "Javi", "Fran", "Antonio"];
console.log(names.sort());

//SPLICE
const videogames = ["Doom", "Mario", "Zelda"];
//videogames.splice(1, 1);
videogames.splice(1, 0, "Fortnite", "Limbo");
console.log(videogames);
//console.log(videogames.splice(1, 2));
videogames.splice(videogames.indexOf("Limbo"), 1);
console.log(videogames);

//TOSTRING
const standardArray = ["Hola", "Adios", "Merienda", "Cena"];
console.log(standardArray.toString());

//JOIN
console.log(standardArray.join(" "));
