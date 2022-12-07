//SPREAD
const listOne = [1, 2, 3];
const listTwo = [4, 5, 6];
const listThree = [...listOne, ...listTwo, 7];
console.log(listThree);

//LITERAL STRING
const quote = `La suma de 2 + 2 es: ${2 + 2}`;
console.log(quote);

//TEMPLATE STRING
const div = `
<div>
    <h2>Hola</h2>
</div>
`;

//DESTRUCTURING
const batman = {
  name: "Bruce",
  surname: "Wayne",
  age: 59,
  status: "Alive",
};

/* const batmanName = batman.name;
const batmanSurname = batman["surname"];  */
const { name, surname, age } = batman;
console.log(`Su nombre es ${name} ${surname} y tiene ${age} años.`);

//MAP
const numList = [2, 3, 4, 5];
const xTwoList = numList.map((num) => num * 2);
console.log(xTwoList);
const objectList = numList.map((num, i) => ({
  num: num,
  index: i + 1,
}));
console.log(objectList);

//FILTER
const paises = ["China", "Japon", "España", "Francia", "Italia", "Chile"];
const paisesConS = paises.filter((pais) => pais.includes("s"));
const paisesConA = paises.filter((pais) => pais.includes("a"));
console.log(paisesConS);
console.log(paisesConA);

const alumnos = [
  {
    name: "Pepe",
    age: 25,
  },
  { name: "Paco", age: 20 },
  {
    name: "Jose",
    age: 15,
  },
];

const over18 = alumnos.filter(
  (alumno) => alumno.age >= 18 || alumno.name.includes("a")
);
console.log(over18);
