import { galleryItems } from "./gallery-items.js";
// Change code below this line

// Створення та рендер розмітки по масиву даних
const pictureMarcup = creatingGalleryPictures(galleryItems);
const galleryConteiner = document.querySelector(".gallery");
galleryConteiner.insertAdjacentHTML("beforeend", pictureMarcup);

// Відкриття модального вікна по кліку на елементі галереї та закриття по натисканню Escape
galleryConteiner.addEventListener("click", onPictureClick);

function creatingGalleryPictures(gallery) {
  const markup = galleryItems
    .map(
      ({ preview, original, description }) =>
        `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div > `
    )
    .join("");
  return markup;
}

function onPictureClick(evt) {
  evt.preventDefault();

  const picture = evt.target.classList.contains("gallery__image");
  if (!picture) {
    return;
  }

  const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${evt.target.dataset.source}" width="1200" height="700" />
    </div>
    `);

  instance.show();

  if (instance) {
    window.addEventListener("keydown", onEscKeydown);
  }

  function onEscKeydown(evt) {
    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscKeydown);
    }
  }
}


console.log(galleryItems);