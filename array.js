const names = ["Rameem", "Fahmida", "Mahabul", "Baten"]

const legends = ["Rasel", "Pathan", "Maysha"]

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// names.push("Rasel")
// names.pop("Baten")

// names.shift();

// names.unshift("Maysha")



console.log(names.concat(legends));
console.log(fruits.reverse());

document.getElementById("msg").innerHTML = names.join(" # ")