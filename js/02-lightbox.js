import { galleryItems } from "./gallery-items.js";
// Change code below this line


const pictureMarcup = creatingGalleryPictures(galleryItems);
const galleryConteiner = document.querySelector(".gallery");

galleryConteiner.insertAdjacentHTML("beforeend", pictureMarcup);

// Створення та рендер розмітки по масиву даних
function creatingGalleryPictures(gallery) {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<li>
        <a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
        </li>`
    )
    .join("");
  return markup;
}

// Ініціалізація біблотеки 
let lightbox = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionsData: "alt",
  captionDelay: 250,
});



console.log(galleryItems);
