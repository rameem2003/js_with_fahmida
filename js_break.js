// for(let x = 1; x <= 100; x++){
//     if(x == 50){continue;}
//     console.log(x);
// }



// let x = 50
// if(x === 50){
//     console.log("True");
// }else{
//     console.log("False");
// }

let text = "";

for(let x = 0; x <= 9; x++){
    if(x == 3){continue;}

    // text = text + "The number is" + x + "<br>";
    text = text + `The number is ${x} <br>`
}

document.getElementById("msg").innerHTML = text;
