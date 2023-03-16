const success = (pos) => {
    console.log(pos);
}

const fail = (err) => {
    console.log(err);
}

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(success, fail)
}else{
    console.log("Not found");
}