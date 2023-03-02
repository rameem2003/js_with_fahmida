const OTP = (n) => {
    let otpPattern = "0123456789";
    let genCode = "";
    for(i = 0; i<n; i++){
        let rand = Math.floor(Math.random() * 10);
        genCode = genCode + otpPattern[rand];
    }

    return(genCode)
}

console.log(OTP(6));