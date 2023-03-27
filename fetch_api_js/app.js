const inputCountry = document.getElementById("inputCountry");
const searchBtn = document.getElementById("searchBtn");


const search_box = document.getElementById("search_box");
const cards = document.querySelector(".cards");


searchBtn.addEventListener("click", () => {
    search_box.classList.add("hide");
    cards.classList.add("show");

    let countryName = inputCountry.value;

    if(countryName != ""){
        fetchUniversity(countryName);
    }else{
        cards.innerHTML = `<div class="preMsg">
                            <h1>Please Enter The value !!!! 🤷‍♂️</h1>
                    </div>`
    }
})


inputCountry.addEventListener("keyup", e => {
    console.log(e);

    if(e.key === "Enter"){
        search_box.classList.add("hide");
        cards.classList.add("show");

        let countryName = inputCountry.value;

        if(countryName != ""){
            fetchUniversity(countryName);
        }else{
            cards.innerHTML = `<div class="preMsg">
                                <h1>Please Enter The value !!!! 🤷‍♂️</h1>
                        </div>`
        }
    }
})






function fetchUniversity (country) {
    cards.innerHTML = `<div class="preMsg">
                            <h1>Please Wait.......</h1>
                    </div>`

    fetch(`http://universities.hipolabs.com/search?country=${country}`).then(response => response.json()).then(data => {
        console.log(data);

        if(data.length != 0){
            cards.innerHTML = data.map(element => {
                return `<div class="card">
                            <h1>${element.name}</h1>
    
                            <div class="flex">
                                <span>${element.country}</span>
                                <a href="${element.domains[0]}">University Website Link</a>
                            </div>
                        </div>`
            }).join(" ");
        }else{
            cards.innerHTML = `<div class="preMsg">
                            <h1>Invalid Query</h1>
                    </div>`
        }

        
    })
}


// const array = ["rameem", "fahmida"];

// cards.innerHTML = array.join(" ");