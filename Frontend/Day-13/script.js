var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var feelsLike = document.querySelector('.feelsLike');
var clouds = document.querySelector('.clouds');
var humidity = document.querySelector('.humidity');
var button = document.querySelector('.submit');

document.addEventListener('keydown', (event) => {
    if (event.key === "Enter") {
        fetchWeather()
    } else {
        return;
    }
})

button.addEventListener('click', fetchWeather)

function fetchWeather() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=ac5b4d29fe3ee03476d1ed5132a58d7a' + '&units=metric')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            var tempValue = data['main']['temp'];
            var feels_Like = data['main']['feels_like']
            var nameValue = data['name'];
            var country = data['sys']['country'];
            var descValue = data['weather'][0]['main'];
            var humidityValue = data['main']['humidity'];

            main.innerHTML = nameValue + "," + country;
            desc.innerHTML = descValue;
            temp.innerHTML = "Temperature - " + tempValue + "°C";
            feelsLike.innerHTML = "Feels Like - " + feels_Like + "°C";
            humidity.innerHTML = "Humidity - " + humidityValue;
            input.value = "";

        })

    .catch(err => alert("Wrong city name!"));
}