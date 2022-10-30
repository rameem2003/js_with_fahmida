const convert_english_to_bangla_number = (number) => {
    let banglaNUmber = "০১২৩৪৫৬৭৮৯";
    let strNumber = String(number);
    let result = '';

    for(let i = 0; i < strNumber.length; i++){
        result = result + banglaNUmber[strNumber[i]];
    }

    console.log(result);
}


convert_english_to_bangla_number(451628)