//Definomos la función padre
const padre = () => {
  //Padre tiene una constante llamada nombre
  const nombre = "Paco";
  //Padre también va a definir una función llamada hijo que hace un console.log de esa constante
  const hijo = (apellido) => {
    console.log(nombre, apellido);
  };
  // Lo que retorna la función es la función hijo, por lo tanto si la almacenamos en una constante al ejecutar padre, lo que nos devuelve es hijo
  return hijo;
};
//Aqui de manera aislada estamos ejecutando padre en una constante, por lo tanto hijoIndependiente se convierte en hijo porque es lo que retorna padre
const hijoIndependiente = padre();
//Como podemos ver, hijoIndependiente sigue siendo capaz de imprimir nombre
hijoIndependiente("Heredia");
