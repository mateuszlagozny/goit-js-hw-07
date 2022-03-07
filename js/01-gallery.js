import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryBox = document.querySelector("div.gallery");

console.log(galleryItems);

for (const element of galleryItems) {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery__item");

  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link");
  galleryLink.href = element.original;

  const galleryImage = document.createElement("img");
  galleryImage.classList.add("gallery__image");
  galleryImage.src = element.preview;
  galleryImage.dataset.source = element.original;
  galleryImage.alt = element.description;

  galleryBox.append(galleryItem);
  galleryItem.append(galleryLink);
  galleryLink.append(galleryImage);
};

galleryBox.onclick = (event) => {
event.preventDefault();

  const instance = basicLightbox.create(
      `<img width="1280" src = ${event.target.dataset.source}>`
    )
  instance.show();

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && instance.visible()) {
      instance.close();
    }
  });
};