import { galleryItems } from './gallery-items.js';
// Change code below this line


console.log(galleryItems);

const galleryBox = document.querySelector("ul.gallery");

for (const el of galleryItems) {
  const galleryItem = document.createElement("a");
  galleryItem.classList.add("gallery__item");
  galleryItem.href = el.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = el.preview;
  galleryImage.alt = el.description;

  galleryBox.append(galleryItem);
  galleryItem.append(galleryImage);
};

const lightbox = new SimpleLightbox(".gallery a", {
  captionSelector: "img",
  captionsData: 'alt',
  captionDelay: 250,
});
