fetch(`https://restcountries.com/v3.1/name/bangladesh?fullText=true`).then(response => response.json()).then(data => {
    console.log(data);
    document.getElementById("msg").innerHTML = data;
})