// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery")

function createGalleryCards(items) {
    return items.map(({ preview, original, description }) => {
        return `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>        </li>
    `;
    }).join("");
};

const cardsMarkup = createGalleryCards(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', cardsMarkup)


const box = new SimpleLightbox('.gallery a', {
    captionSelector: 'img',
    captionData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom'
});


