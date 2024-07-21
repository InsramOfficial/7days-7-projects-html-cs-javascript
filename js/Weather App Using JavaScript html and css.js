const apikey = "d3feb9fe0ee32255ffb42b3bbc5f1f9a";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const weathericon = document.querySelector(".weather-icon");
const searchbox = document.querySelector(".search input");
const searchtbn = document.querySelector(".search button");

async function checkweather(city) {
    fetch(apiurl + city + `&apikey=${apikey}`).then(response => {

        if (response.status == 404) {
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else {
            return response.json();
        }

    }).then(data => {
        console.log(data);
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "kh/h";
        if (data.weather[0].main == "Clouds") {
            weathericon.src = "images/clouds.png"
        }
        else if (data.weather[0].main == "rainy") {
            weathericon.src = "images/rain.png"
        }
        else if (data.weather[0].main == "mist") {
            weathericon.src = "images/mist.png"
        }
        else if (data.weather[0].main == "snow") {
            weathericon.src = "images/snow.png"
        }
        else if (data.weather[0].main == "drizzle") {
            weathericon.src = "images/drizzle.png"
        }
        else {
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".error").style.display = "block";
        }
    }).catch(error => {
        console.log('Error: ', error)
    })


}

searchtbn.addEventListener("click", () => {
    checkweather(searchbox.value);

})


