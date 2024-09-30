const apiKey = "322b1360cb31306f71087d2883b190c6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search-bar-text");
const searchBtn = document.querySelector(".search-button");
const weatherIcon = document.querySelector(".icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data = await response.json();

    console.log(data);

    document.querySelector(".place").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity-percent").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind-speed").innerHTML = data.wind.speed + " km/h";

    weatherIcon.src = `img/${data.weather[0].main}.png`;
    
    /* if(data.weather[0].main === "Clouds"){
        weatherIcon.src = "img/cloudy.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        weatherIcon.src = "img/drizzle.png";
    }
    else if(data.weather[0].main === "Haze"){
        weatherIcon.src = "img/haze.png";
    }
    else if(data.weather[0].main === "Mist"){
        weatherIcon.src = "img/mist.png";
    }
    else if(data.weather[0].main === "Rain"){
        weatherIcon.src = "img/rain.png";
    }
    else if(data.weather[0].main === "Snow"){
        weatherIcon.src = "img/snow.png";
    }
    else if(data.weather[0].main === "Clear"){
        weatherIcon.src = "img/sun.png";
    } */
}

searchBtn.addEventListener("click", (event) => {
    checkWeather(searchBox.value);
});



