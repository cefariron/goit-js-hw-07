import { galleryItems } from './gallery-items.js';


const listEl = document.querySelector(".gallery")

const markup = galleryItems.map(({ description, original, preview }) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}" target="_blank">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </li>
`).join("")

listEl.insertAdjacentHTML("beforeend", markup)

listEl.addEventListener("click", (event) => {

    event.preventDefault()

    if (event.target === event.currentTarget) {
        return;
    }

    const instance = basicLightbox.create(`
    <div class="modal">
    <img src="${event.target.dataset.source}" width="800" height="600">
    </div>
`)

instance.show()

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        instance.close();
    }
  });
})