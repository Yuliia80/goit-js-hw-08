// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const galleryEl = document.querySelector('.gallery');
const markup = galleryItems.map(({ preview, original, description }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}"/>
    </a>
  </li>`
);

galleryEl.insertAdjacentHTML('beforeend', markup.join(''));

const ulEl = document.querySelector('ul');
ulEl.style.listStyle = 'none';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt', 
  captionPosition: 'bottom', 
  captionDelay: 250
});