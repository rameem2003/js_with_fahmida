const inputCountry = document.getElementById("inputCountry");
const searchBtn = document.getElementById("searchBtn");


const search_box = document.getElementById("search_box");
const cards = document.querySelector(".cards");


searchBtn.addEventListener("click", () => {
    search_box.classList.add("hide");
    cards.classList.add("show");

    let countryName = inputCountry.value;

    fetchUniversity(countryName);
})






function fetchUniversity (country) {
    fetch(`http://universities.hipolabs.com/search?country=${country}`).then(response => response.json()).then(data => {
        console.log(data);

        cards.innerHTML = `${data.map(element => {
            return `<div class="card">
                        <h1>${element.name}</h1>

                        <div class="flex">
                            <span>${element.country}</span>
                            <a href="${element.web_pages[0]}">${element.web_pages[0]}</a>
                        </div>
                    </div>`
        })}`
    })
}