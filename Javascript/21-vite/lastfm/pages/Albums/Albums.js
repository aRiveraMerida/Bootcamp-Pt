import "./Albums.css";

export const Albums = () => {
  const main = document.querySelector("main");
  main.innerHTML = `
  <h2>Search your artist:</h2>
  <input type="text" id="searchInput" placeholder="Ex: Iron Maiden"/>
  <button id="searchBtn">Search</button>
  <section id="artist"></section>
  <section id="albums"></section>
  `;

  const searchInput = document.querySelector("#searchInput");
  const searchBtn = document.querySelector("#searchBtn");
  searchBtn.addEventListener("click", () => {
    const artistSection = document.querySelector("#artist");
    artistSection.innerHTML = "Loading...";
    const albumsSection = document.querySelector("#albums");
    albumsSection.innerHTML = "";
    getData(searchInput.value);
  });
};

const getData = async (artist) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "786f405768msh1c970eefc97ca3ep13fd83jsna1a90d108ac8",
      "X-RapidAPI-Host": "contextualwebsearch-websearch-v1.p.rapidapi.com",
    },
  };

  const rawImage = await fetch(
    `https://contextualwebsearch-websearch-v1.p.rapidapi.com/api/Search/ImageSearchAPI?q=${artist}&pageNumber=1&pageSize=10&autoCorrect=true`,
    options
  );
  const rawAlbums = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artist}&api_key=bf4a01db2c307aa068ec4c0a16c64c66&format=json`
  );
  const rawArtist = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artist}&api_key=bf4a01db2c307aa068ec4c0a16c64c66&format=json`
  );
  const albums = await rawAlbums.json();
  const artistData = await rawArtist.json();
  const imageData = await rawImage.json();
  console.log(imageData);

  printInfo(albums.topalbums, artistData.artist, imageData.value[0].url);
};

const printInfo = (albums, artist, image) => {
  const artistSection = document.querySelector("#artist");
  const albumsSection = document.querySelector("#albums");

  artistSection.innerHTML = "";
  albumsSection.innerHTML = "";

  //En la sección del artista pintamos la info del artista en @attr
  artistSection.innerHTML = `
    <h3>${artist.name}</h3>
    <img src=${image} alt=${artist.name}/>
    <a href=${artist.url}>More band info +</a>
    <h4>${artist.tags.tag.map((tag) => "#" + tag.name).join(" ")}</h4>
    <h4>Similar artists: ${artist.similar.artist
      .map((artist) => artist.name)
      .join(", ")}</h4>
    <p>${artist.bio.summary}</p>
  `;

  //En la sección albums pintaremos todos los albums
  for (const album of albums.album) {
    const div = document.createElement("div");
    div.innerHTML = `
        <h4>${album.name}</h4>
        <p>Play count: ${album.playcount}</p>
        <img src=${album.image[album.image.length - 1]["#text"]} alt=${
      album.name
    }/>
    <a href=${album.url}>More info +</a>
        `;

    albumsSection.appendChild(div);
  }
};
