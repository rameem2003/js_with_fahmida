const input_screen = document.getElementById("input_screen");
const output_screen = document.getElementById("output_screen")

/**
 * 
 * This is old style of js
 */


// function digit(value){
//     input_screen.value = input_screen.value + value
// }


/**
 * 
 * This is new style of js ES6
 */

const digit = (value) => {
    input_screen.value = input_screen.value + value; // "" + 7 + 8 + "+" + 5
}

const clearScreen = () => {
    input_screen.value = ""
}


const calc = () => {
    output_screen.value = eval(input_screen.value)
}

