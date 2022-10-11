export const initHeader = () => {
  addTemplateTohtml();
}

const templateHeader = () => `
<header>
  <h1>Bienvenidos</h1> 
  <h2>Esto es muy facil</h2> 
</header>`

const addTemplateTohtml = () => {
  document.querySelector('#app').innerHTML += templateHeader();
}