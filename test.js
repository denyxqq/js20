//1
const images = document.querySelectorAll(".image")
let currentIndex = 0
const showImage = (index) => {
    images.forEach((img, i) => {
        if (i === index) {
            img.style.display = "block"
        } else {
            img.style.display = "none"
        }
    })
}
showImage(currentIndex)
window.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight" && currentIndex < images.length - 1) {
        currentIndex++
    } else if (event.key === "ArrowLeft" && currentIndex > 0) {
        currentIndex--
    }
    showImage(currentIndex)
})
// #2
const fatherBox = document.querySelector("div#boxes");
const input = document.querySelector("input");
const render = document.querySelector("button[data-action='render']");
const destroy = document.querySelector("button[data-action='destroy']");
render.addEventListener("click",(e) =>{
createBoxes(input.value)
})
function createBoxes(amount){
let x = 30;
let y = 30;
for(let i = 0; i < amount; i++){
fatherBox.insertAdjacentHTML("afterbegin","<div></div>");
}
const chil = fatherBox.children;
for(let i = 0; i < chil.length; i++){
const red = Math.round(Math.random() * (255 - 0) + 0);
const green = Math.round(Math.random() * (255 - 0) + 0);
const blue = Math.round(Math.random() * (255 - 0) + 0);
const randomColor = `rgb(${red}, ${green}, ${blue})`
chil[i].style.backgroundColor = randomColor;
chil[i].style.width = `${x}px`;
chil[i].style.height = `${y}px`;
x += 10;
y += 10;
}
}

destroy.addEventListener("click" , () => {
    destroyBoxes();
})
const childer = fatherBox.children;
function destroyBoxes(){
    for(let i = 0; i < childer.length; i++){
        childer[i].remove();
    }
}