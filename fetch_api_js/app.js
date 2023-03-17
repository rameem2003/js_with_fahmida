const searchItem = document.getElementById("searchItem");
const btn = document.getElementById("btn");
const result = document.getElementById("result");


btn.addEventListener("click", () => {
    let country = searchItem.value;
    // console.log(country);

    fetch(`http://universities.hipolabs.com/search?country=${country}`).then(response => response.json()).then(data => {
        console.log(data);

        let universityName = "";
        data.forEach(element => {

            universityName = universityName + `<li>${element.name}</li>`

        })
        
        result.innerHTML = universityName;
    })
})

