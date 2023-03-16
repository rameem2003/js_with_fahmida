fetch(`https://restcountries.cm/v3.1/name/bangladesh?fullText=true`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // document.getElementById("msg").innerHTML = data;
  })
  .catch((a) => {
    console.table(a);
  });
