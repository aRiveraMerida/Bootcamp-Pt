import './home.css'


import { createInfo } from '../Info/Info'


export const createHome = () => {
  document.querySelector('#app').innerHTML = `
    <div class="comic">
      <div class="split manga">
        <h1 class="home-title">Manga</h1>
        <button id="btn-manga" class="btn">Know more</button>
      </div>
      <div class="split american">
        <h1 class="home-title">American</h1>
        <button id="btn-american" class="btn">Know more</button>
      </div>
    </div>
  `
  addListenersHome()
}

const addListenersHome = () => {
  document.querySelector('#btn-manga').addEventListener('click', () => createInfo('manga'))
  document.querySelector('#btn-american').addEventListener('click', () => createInfo('american'))

  const container = document.querySelector('.comic')

  document.querySelector('.manga').addEventListener('mouseenter', () => container.classList.add('hover-left'))
  document.querySelector('.manga').addEventListener('mouseleave', () => container.classList.remove('hover-left'))

  document.querySelector('.american').addEventListener('mouseenter', () => container.classList.add('hover-right'))
  document.querySelector('.american').addEventListener('mouseleave', () => container.classList.remove('hover-right'))
}