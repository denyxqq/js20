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
//2
const fatherBox = document.querySelector("div#boxes");
const input = document.querySelector("input");
const render = document.querySelector("button[data-action='render']");
const destroy = document.querySelector("button[data-action='destroy']");
render.addEventListener("click",(event) =>{
createBoxes(input.value)
})
function createBoxes(amount){
let x = 30;
let y = 30;
for(let i = 0; i < amount; i++){
fatherBox.insertAdjacentHTML("afterbegin","<div></div>");
}
const childr = fatherBox.children;
for(let i = 0; i < chil.length; i++){
const red = Math.round(Math.random() * (255 - 0) + 0);
const green = Math.round(Math.random() * (255 - 0) + 0);
const blue = Math.round(Math.random() * (255 - 0) + 0);
const randomColor = `rgb(${red}, ${green}, ${blue})`
childr[i].style.backgroundColor = randomColor;
childr[i].style.width = `${x}px`;
childr[i].style.height = `${y}px`;
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