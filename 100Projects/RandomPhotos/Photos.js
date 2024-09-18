const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

let imageNum = 10; // Start with the initial number of images

btnEl.addEventListener("click", () => {
    addNewImages(10); // Load 5 more images each time the button is clicked
});

function addNewImages(count) {
    for (let i = 0; i < count; i++) {
        imageNum++; // Increment the image number for each new image
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${imageNum}`;
        imageContainerEl.appendChild(newImgEl);
    }
}
