const text = document.getElementById("text")
const btn = document.getElementById("btn")


btn.addEventListener("click", () => {
    let presentText = text.value;

    text.value = presentText.slice(0, -1)
})