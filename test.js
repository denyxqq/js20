// #1
const images = document.querySelectorAll(".image");
const lightbox = document.getElementById("lightbox");
const fullImg = document.getElementById("fullImg");
let currentIndex = 0;

images.forEach((img, index) => {
  img.addEventListener("click", () => {
    fullImg.src = img.src;
    lightbox.style.display = "flex";
    currentIndex = index;
  });
});

document.addEventListener("keydown", (event) => {
  if (lightbox.style.display === "flex") {
    if (event.key === "ArrowRight") {
      currentIndex = (currentIndex + 1) % images.length;
    } else if (e.key === "ArrowLeft") {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
    }
    fullImg.src = images[currentIndex].src;
  }
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// #2
const input = document.querySelector(`input[type="number"]`);
const renderBtn = document.querySelector(`[data-action="render"]`);
const destroyBtn = document.querySelector(`[data-action="destroy"]`);
const boxes = document.querySelector("#boxes");

let size = 30;
let color = "";
const createBoxes = (amount) => {
  for (let i = 0; i < amount; i += 1) {
    color = `rgb(${Math.round(Math.random() * (255 - 0) + 0)}, ${Math.round(
      Math.random() * (255 - 0) + 0
    )}, ${Math.round(Math.random() * (255 - 0) + 0)})`;
    boxes.insertAdjacentHTML(
      "beforeend",
      `<div style=" width: ${size}px; height: ${size}px; background-color: ${color}"></div>`
    );
    size += 10;
  }
};

const destroyBoxes = () => {
  boxes.innerHTML = "";
  size = 30;
};

renderBtn.addEventListener("click", () => {
  createBoxes(input.value);
});

destroyBtn.addEventListener("click", () => {
  destroyBoxes();
});