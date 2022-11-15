const character = {
  name: "Peter",
  surname: "Parker",
};

console.log(character.name);
console.log(character.hasOwnProperty("age"));

let ObjectConstructor = {
  quote: function () {
    return "Hola, soy un superheroe";
  },
};

function Superhero(name, realName) {
  const superhero = Object.create(ObjectConstructor);
  superhero.name = name;
  superhero.realName = realName;
  return superhero;
}

const spiderman = Superhero("Spider-Man", "Peter Parker");
console.log(spiderman);

//Classes

class Character {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  attack() {
    return `${this.name} está atacando!`;
  }

  defense() {
    return `${this.name} está defendiéndose!`;
  }
}

const Daredevil = new Character("Daredevil", 38);
console.log(Daredevil);
console.log(Daredevil.attack());

const Hulk = new Character("Hulk", 45);
console.log(Hulk.defense());

//Herencia

class Vehicle {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  move() {
    return `${this.name} se está moviendo`;
  }

  stop() {
    return `${this.name} se ha parado`;
  }
}

class Car extends Vehicle {
  constructor(name, color, doors) {
    super(name, color);
    this.doors = doors;
    this.wheels = 4;
  }

  handBrake() {
    return `${this.name} ha aparcado`;
  }
}

const seatIbiza = new Car("Seat Ibiza", "Rojo", 3);
console.log(seatIbiza);
console.log(seatIbiza.handBrake());
console.log(seatIbiza.move());

class Plane extends Vehicle {
  constructor(name, color, wings) {
    super(name, color);
    this.wings = wings;
  }

  fly() {
    return `${this.name} está volando`;
  }
}

const boeing747 = new Plane("Boeing 747", "Blanco", 2);
console.log(boeing747.fly());
