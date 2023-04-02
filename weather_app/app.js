fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&units=metric&appid=7a99801248ad653462c72a0c01c29959`)
.then(responce => responce.json())
.then(data => {
    console.log(data);

    let sunriseUTC = data.sys.sunrise;
    let timeZone = data.timezone; // timezone = 21600
    let timeStamp = data.dt;
    let date = new Date((timeStamp) * 1000);
    console.log(date); // Thu Jan 01 1970 12:00:00 GMT+0600 (Bangladesh Standard Time)
});


// const utcOffsetSeconds = 21600; // replace with the offset you received from the API
// const localDate = new Date(); // get the current date/time in local timezone
// const localOffsetMinutes = localDate.getTimezoneOffset(); // get the local timezone offset in minutes
// const utcOffsetMinutes = utcOffsetSeconds / 60; // convert UTC offset from seconds to minutes
// const totalOffsetMinutes = localOffsetMinutes - utcOffsetMinutes; // calculate the total offset from UTC
// const targetDate = new Date(localDate.getTime() + totalOffsetMinutes * 60 * 1000); // create a new date object with the total offset applied
// console.log(targetDate); // outputs the date in your local timezone


// const timezoneOffset = 21600; // Timezone offset in seconds with UTC+6
// const timestamp = 1680404391; // Unix timestamp in seconds from OpenWeather API
// const date = new Date((timestamp + timezoneOffset) * 1000); // Convert to JavaScript Date object with timezone offset
// const options = {
// timeZone: "Asia/Dhaka",
// weekday: "long",
// year: "numeric",
// month: "long",
// day: "numeric",
// hour: "numeric",
// minute: "numeric",
// second: "numeric",
// };
// const localTimeString = date.toLocaleString("bn-BD", options); // Convert to local time string
// console.log(localTimeString); // Output: "সোমবার, ৪ এপ্রিল, ২০২২ ১:২০:০০ AM"