const guardarNombreEnAlmacen = () => {
  const name = "Peter";
  localStorage.setItem("usuario", name);
  //localStorage.usuario = name;
  localStorage.setItem("admin", "Paco");
  localStorage.clear()
};

guardarNombreEnAlmacen();

console.log(localStorage.usuario);

