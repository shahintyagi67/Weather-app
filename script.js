const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather-img');
const temprature = document.querySelector('.temprature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const Wind_speed = document.getElementById('Wind-speed');

const location_not_found = document.querySelector('.location-not-found');

const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
 const api_key = "60d7b17a5a0133984a85b2f93de3d433";
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

 const weather_data = await fetch(`${url}`).then(response => response.json());

 if(weather_data.cod === `404`){
    location_not_found.style.display = "flex";
    weather_body.style.display = "none";
    return;
 }
 location_not_found.style.display = "none";
weather_body.style.display = "flex";

 
//    console.log(weather_data);
temprature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
description.innerHTML = `${weather_data.weather[0].description}`;
// console.log(weather_data);
humidity.innerHTML = `${weather_data.main.humidity}%`;
Wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;

switch(weather_data.weather[0].main){
    case 'Clouds':
        weather_img.src = "cloud2.webp";
        break;
        case 'Clear':
            weather_img.src = "clear2.png";
            break;
            case 'Rain':
                weather_img.src = "rain2.png";
                break;
                case 'Mist':
                    weather_img.src = "mist.png";
                    break;
                    case 'Snow':
                        weather_img.src = "snow.png";
                        break;
}

}
searchBtn.addEventListener('click',()=>{
checkWeather(inputBox.value);
});


