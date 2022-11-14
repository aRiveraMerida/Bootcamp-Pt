const addItem = (item, list) => {
  const promise = new Promise((resolve, reject) => {
    if (!list) {
      reject("No existe la lista");
    }

    setTimeout(() => {
      list.push(item);
      resolve(list);
    }, 2000);
  });

  return promise;
};

const colorList = ["Rojo", "Azul", "Verde"];

addItem("Amarillo", colorList)
  .then((list) => {
    console.log("El listado ha quedado así: ", list);
  })
  .catch((err) => {
    throw new Error(err);
  });

addItem("Naranja", colorList)
  .then((list) => {
    console.log("El listado ha quedado así: ", list);
  })
  .catch((err) => {
    throw new Error(err);
  });

console.log(addItem("Violeta", colorList));
//Esto no lo podremos ejecutar tal cual de ninguna forma si no gestionamos su asincronia, y como se puede ver, nos saca que esto es una promesa pendiente
