const container = document.querySelector("#app");
const BASE_URL = "https://starwars-databank.vercel.app/droids?page=1&limit=30";

const getDroids = () => {
  fetch(BASE_URL).then((res) => {
    console.log("Respuesta", res);
    if (res.status === 200) {
      res.json().then((formattedRes) => {
        printDroids(formattedRes.droids);
      });
    } else {
      container.innerHTML = `<h2>No se ha podido realizar la petición a: ${BASE_URL} </h2>`;
    }
  });
};

const printDroids = (droids) => {
  for (const droid of droids) {
    const div = document.createElement("div");
    div.innerHTML = `
        <div>
            <h2>${droid.name}</h2>
            <img src=${droid.image} alt=${droid.name} />
            <p>${droid.description}</p>
        </div>`;
    container.appendChild(div);
  }
};

getDroids();

//EJEMPLO TRYCATCH
/* const  = "Pepe"; */

try {
  const name = realName;
  console.log(name);
} catch (error) {
  console.log("no hay name", error);
}
