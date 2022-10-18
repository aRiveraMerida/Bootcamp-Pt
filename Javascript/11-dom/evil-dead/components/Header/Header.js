//Estoy exportando un template string
//Esta función la vamos a importar en el main y la vamos a inyectar con innerHTML dentro del nodo de la etiqueta header

export const Header = () => `
<nav>
    <h1>The Evil Dead</h1>
    <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Movies</a></li>
        <li><a href="#">Trailer</a></li>
    </ul>
    <button id="themeBtn">Tema</button>
</nav>
`;

