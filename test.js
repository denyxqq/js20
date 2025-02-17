//1
const gallery = document.querySelector("ul.gallery");
const count = gallery.children;
let x = 0;
for(let i = 0; i < count.length; i++){
count[i].classList.add("full-image-container");
}
count[0].classList.remove("full-image-container");
document.addEventListener("keydown" , (event) => {
    if (event.code === "ArrowRight" && x < 5){
    x += 1;
    count[x-1].classList.add("full-image-container");
    count[x].classList.remove("full-image-container");
    }else if(e.code === "ArrowLeft" && x > 0){
    x -= 1;
    count[x].classList.remove("full-image-container");
    count[x+1].classList.add("full-image-container");
    }
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