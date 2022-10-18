const icon = document.getElementById("icon");
const formateText = document.getElementById("formateText");

const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");


startBtn.addEventListener("click", () => {
    icon.style.display = "block"
    formateText.style.display = "block"
    startBtn.style.display = "none"
    resetBtn.style.display = "initial"
})

resetBtn.addEventListener("click", () => {
    document.location.reload();
})