const numberList = [1, 2, 5, 8, 10];

// dada una lista multiplicar sus valores * 2
// const numberListMultiplyTwo = numberList.map(number => number * 2);

const numberListMultiplyTwo = numberList.map(
  (number) => {
    return number === 1 ? number * 8 : number * 2;
  }
);

const userList = [
  {
    name: 'Juan',
    age: 41,
    isDeveloper: true
  },
  {
    name: 'Filipe',
    age: 30,
    isDeveloper: true
  },
  {
    name: 'Manolita',
    age: 12,
    isDeveloper: false
  }
]

// Map mapea información -> transforma la información - te lo devuelve en un nuevo elemento sin modificar el original
const userListMapped = userList.map(
  (user) => {
    if (user.isDeveloper) {
      user.isDeveloper = 'Eres un crack del JS'
    } else {
      user.isDeveloper = 'Vuelve al cole'
    }
    return user;
  }
)

console.log(userListMapped);