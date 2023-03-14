const factorial = (value) => {
    let fact = 1;
    let number = parseInt(value);

    for(i = number; i>0; i--){
        fact = fact * i;
    }

    console.log(fact);
}

factorial(5)