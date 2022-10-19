const icon = document.getElementById("icon");
const formateText = document.getElementById("formateText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");


startBtn.addEventListener("click", () => {
    let numberOfwon = 0;
    let numberOflose = 0;

    for(let x = 1; x <= 5; x++){
        let inputNumber = parseInt(prompt("Enter number from 1 to 5"))

        let systemNumber = Math.floor(Math.random() * 5) + 1;

        if(inputNumber == systemNumber){
            console.log("আই জিতছি");
            numberOfwon++
        }else{
            console.log("আই হারি গেছি");
            numberOflose++
        }
    }

    icon.style.display = "block"
    formateText.style.display = "block"
    startBtn.style.display = "none"
    resetBtn.style.display = "initial"


    if(numberOfwon > numberOflose){
        formateText.innerHTML = `আই জিতছি ${numberOfwon} বার`
        icon.classList.replace("fa-heart-crack", "fa-medal")

    }else{
        formateText.innerHTML = `আই হারি গেছি ${numberOflose} বার`
        icon.classList.replace("fa-medal", "fa-heart-crack")
    }

    
})

resetBtn.addEventListener("click", () => {
    document.location.reload();
})