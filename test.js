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
    if (e.key === "ArrowRight") {
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

//2
const inputNumber = document.querySelector("input");
const addButton = document.querySelector('[data-action="render"]');
const delButton = document.querySelector('[data-action="destroy"]')
let inputNum = 0
inputNumber.addEventListener("blur", (event) => {
  inputNum = Number(e.target.value); 
  return console.log(inputNum)
})


let containre = document.querySelector("#boxes") 
addButton.addEventListener("click", () => {
  function createBoxes(amount){

    for (let i = 0; i < amount; i++) {
      let red = Math.round(Math.random() * (255 - 0) + 0);
      let green = Math.round(Math.random() * (255 - 0) + 0);
      let blue = Math.round(Math.random() * (255 - 0) + 0);
      let width = 30 + i * 10 + "px"
      let height = 30 + i * 10 + "px"
      const box = document.createElement("div")
      box.style.width = width
      box.style.height = height
      box.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
      containre.append(box)
    }
    return console.log(containre)
    }
  
    createBoxes(inputNum)
})

delButton.addEventListener("click", () => {
  function destroyBoxes(){
  containre.innerHTML = ""
  return containre
  }
  destroyBoxes()
})