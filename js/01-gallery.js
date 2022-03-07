// import { galleryItems } from './gallery-items.js';
// Change code below this line

  


// console.log(galleryItems); 
 
// const galleryBox = document.querySelector('div.gallery');

// const createGalleryItem = () => {
//     const galleryItem = document.createElement('div');
//     galleryItem.classList.add('galerry__item');
//      return galleryItem;
// };

// const createLink = () => {
//     const galleryLink = documnet.createelement('a');
//     galleryLink.classList.add('gallery__link');
//     return galleryLink;
// };

// const creatImage = () => {
//     const galerryImage = document.createElement('img');
//     galleryImage.classList.add('gallery__img');
//     return galleryImage;
// }

// galleryItems.forEach(photo => {
//     const $galleryItem = createGalleryItem();

//     const $galleryLink = createLink();
//     $galleryLink.href = photo.oryginal;

//     const $galleryImage = creatImage;
//     $galleryImage.alt = photo.description;
//     $galleryImage.src = photo.preview;

//     galleryBox.append('$galleryItem');
//     $galleryItem.append('$galleryLink');
//     $galleryLink.append('$galleryImage');


// });


//////////////////////////////////////////////////////////////////////////////////////
// galleryItems.forEach(photo => {
//     const galleryItem = document.createElement('div');
//     galleryItem.classList.add('galerry__item');

//     const galleryLink = documnet.createelement('a');
//     galleryLink.classList.add('gallery__link');
//     galleryLink.href = photo.oryginal;

//     const galerryImage = document.createElement('img');
//     galleryImage.classList.add('gallery__img');
//     galleryImage.alt = photo.description;
//     galleryImage.src = photo.preview;

//     galleryBox.append('$galleryItem');
//     galleryItem.append('$galleryLink');
//     galleryLink.append('$galleryImage');


// });

/////////////////////////////////////////////////////////////////////////////////////////////

// galleryBox.addEventListener('click', event => {
//     event.preventDefault();

//     const $img = event.target;
//     const $a = $img.closest('a');


// });

// basicLightBox.create(`<img with="1280" src=${$a.href}>`).show();

import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector("div.gallery");

console.log(galleryItems);

for (const el of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = el.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = el.preview;
  galleryImage.dataset.source = el.original;
  galleryImage.alt = el.description;

  galleryBox.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
};

galleryBox.onclick = (event) => {
event.preventDefault();

  const instance = basicLightbox
    .create(
      `<img width="1280" src = ${event.target.dataset.source}>`
    )
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) {
      instance.close();
    }
  });
};