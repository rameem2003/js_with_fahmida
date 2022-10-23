const imgLoader = document.getElementById("imgLoader");
const btnLeft = document.getElementById("btnLeft");
const btnRight = document.getElementById("btnRight");
let position = 0;

const legendaryImg = [
    "img-38.jpg",
    "img-37.jpg",
    "img-36.jpg",
    "img-35.jpg",
    "img-34.jpg",
    "img-33.jpg",
]

let count = legendaryImg.length;
console.log(count);

btnRight.addEventListener("click", () => {
    position++;
    console.log(position);
    
    if(position == count){
        position = 0;
    }
    
    imgLoader.src = `./imgs/${legendaryImg[position]}`;
})




window.onload = () => {
    imgLoader.src = `./imgs/${legendaryImg[0]}`
}
