const input_screen = document.getElementById("input_screen");
const output_screen = document.getElementById("output_screen");


const printDigit = (digit) => {
    input_screen.value = input_screen.value + digit;
}

const clearScreen = () => {
    input_screen.value = "";
    output_screen.value = ""
}

const calc = () => {
    output_screen.value = eval(input_screen.value)
}

const sliceDigit = () => {
    let presentValue = input_screen.value;
    input_screen.value = presentValue.slice(0, -1);
}