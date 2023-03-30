fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=7a99801248ad653462c72a0c01c29959`).then(responce => responce.json()).then(data => {
    console.log(data);

    let sunriseUTC = data.sys.sunrise;
    let timeZone = data.timezone;
    let date = new Date(sunriseUTC * 1000)
    console.log(date);
})