import "./App.css";

import Header from "./components/Header";
import Layout from "./components/Layout";
import ShowName from "./components/ShowName";

const App = () => {
  const name = "Peter Parker";
  const date = new Date().getHours();
  const cabecera = "Esto es un prop que viene de App.jsx";

  return (
    <div className="App">
      <Layout>
        <Header title={cabecera} subtitle="Soy un subtitulo de App.jsx" />
        <ShowName />
        <h2>Bienvenidos a React</h2>
        <h2>Hola, mi nombre es {name}</h2>
        <h2>2 + 2 son {2 + 2}</h2>
        <p>{date > 12 ? "Buenas tardes" : "Buenos días"}</p>
      </Layout>
    </div>
  );
};

export default App;
