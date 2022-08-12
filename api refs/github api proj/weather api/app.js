
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelector(".set-location");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {

  document.querySelector('.modal-city').value = '';
  document.querySelector('.modal-country').value = '';
  modal.style.display = "block";
  btn.textContent = 'Change Location'
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// console.log(exports.getCode('Switzerland'));

// Instantiate WeatherHTTP object
const http = new WeatherHTTP;

const saveBtn = document.querySelector('.save-btn');
const closeBtn = document.querySelector('.close-btn');

const weatherIcon = document.querySelector('.weather-icon');
const cityName = document.querySelector('.city');
const currentWeather = document.querySelector('.current-weather');
const currentTemp = document.querySelector('.current-temp');
const humidity = document.querySelector('.humidity');
const feelTemp = document.querySelector('.feels-like');
const highLow = document.querySelector('.high-low');
const wind = document.querySelector('.wind');
const wrongEntry = document.querySelector('.wrong-entry');
const modalHeader = document.querySelector('.modal-header');

saveBtn.addEventListener('click', getInfo);
closeBtn.addEventListener('click', () => modal.style.display = 'none');

if (localStorage.getItem('lastCityEntered') !== null) {
  const reloadCity = JSON.parse(localStorage.getItem('lastCityEntered'));
  cityName.textContent = reloadCity.city;
  currentWeather.textContent = reloadCity.weather;
  currentTemp.textContent = reloadCity.temperature.concat(' C');
  weatherIcon.setAttribute('src', `https://www.openweathermap.org/img/wn/${reloadCity.openWeatherIcon}.png`);
  humidity.textContent = reloadCity.humidity + '%';
  feelTemp.textContent = reloadCity.feels_like.concat(' C');
  highLow.textContent = `${reloadCity.high_temp} C, ${reloadCity.low_temp} C`;
  wind.textContent = reloadCity.wind_speed.concat(' km/h');
}

function getInfo() {
  const city = document.querySelector('.modal-city').value;
  const countryCode = document.querySelector('.modal-country').value;

  http.getWeather(city, countryCode)
    .then(data => {
      let weatherDescr = data.weather[0].description;
      weatherDescr = weatherDescr.split(' ').map(word => word[0].toUpperCase().concat(word.slice(1))).join(' ');
      let weatherImg = data.weather[0].icon;
      weatherIcon.setAttribute('src', `https://www.openweathermap.org/img/wn/${weatherImg}.png`);
      // Kelvin 0 degrees is equivalent to -273.15 Celsius degrees
      let tempCelsius = (data.main.temp + -273.15).toFixed(1);
      let humidityPercent = data.main.humidity;
      let feelCelsius = (data.main.feels_like + -273.15).toFixed(1);
      let highCelsius = (data.main.temp_max + -273.15).toFixed(1);
      let lowCelsius = (data.main.temp_min + -273.15).toFixed(1);
      let windKm = (data.wind.speed / 1000 * 3600).toFixed(1);

      function properCityCaps(someString) {
        function lowerToUpper(match) {
          return match.toUpperCase();
        }
        return someString.replace(/(?<=\s|-)[A-Za-z]/g, lowerToUpper);
      }

      const properCityName = city[0].toUpperCase() + properCityCaps(city.toLowerCase()).slice(1);
      cityName.textContent = properCityName;
      currentWeather.textContent = weatherDescr;
      currentTemp.textContent = tempCelsius.concat(' C');
      humidity.textContent = humidityPercent + '%';
      feelTemp.textContent = feelCelsius.concat(' C');
      highLow.textContent = `${highCelsius} C, ${lowCelsius} C`;
      wind.textContent = windKm.concat(' km/h');

      const lastCity = {
                          city: properCityName,
                          weather: weatherDescr,
                          temperature: tempCelsius,
                          openWeatherIcon: weatherImg,
                          humidity: humidityPercent,
                          feels_like: feelCelsius,
                          high_temp: highCelsius,
                          low_temp: lowCelsius,
                          wind_speed: windKm
      };

      localStorage.setItem('lastCityEntered', JSON.stringify(lastCity));
      modal.style.display = 'none';
    })
    .catch(err => {
      modalHeader.style.marginBottom = '1%';
      wrongEntry.style.display = 'block';

      setTimeout(() => {
        wrongEntry.style.display = 'none';
        modalHeader.style.marginBottom = '6%';
      }, 3000);
      console.log(err);
    });
}
