import './info.css'

import { createHome } from '../Home/Home'



import { AMERICAN } from '../../constants/american'
import { MANGA } from '../../constants/manga'

export const createInfo = (type) => {

  document.querySelector('#app').innerHTML = `
  <h1>${type === 'manga' ? MANGA.title : AMERICAN.title}</h1>
  <div id="faq-id" class="faq-container"></div>
  <button id="home">Back to Home</button>
  `
  addContentFaqs(type)
  addListernersInfo()
}

const addContentFaqs = (type) => {
  const element = type === 'manga' ? MANGA : AMERICAN
  element.faqs.forEach((faq, index) => createFaqs(faq, index))
}

const createFaqs = (faq, index) => {
  document.querySelector('#faq-id').innerHTML += `
    <div class="faq ${index === 0 ? 'active' : ''}">
      <h3 class="faq-title">${faq.question}</h3>
      <p class="faq-text">${faq.response}</p>
      <button class="faq-toggle">
        <i class="fas fa-chevron-down"></i>
        <i class="fas fa-times"></i>
      </button>
    </div>
  `
}

const addListernersInfo = () => {
  const toggles = document.querySelectorAll('.faq-toggle')
  console.log(toggles)
  toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.parentNode.classList.toggle('active')
    })
  })
  document.querySelector('#home').addEventListener('click', () => createHome())
}