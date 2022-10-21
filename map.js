let obj = new Map([
    ["fahmida", 451628],
    ["rameem", 451638],
]);


// console.log(obj);

// obj.set("baten", 451627);

// console.log(obj.get("baten"));

// obj.delete("baten")

// console.log(obj);


let text = ""

for(const x of obj.entries()){
    text = text + `${x} <br>`
}

document.getElementById("msg").innerHTML = text;

