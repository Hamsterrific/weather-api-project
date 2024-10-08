import loadCities from './parser.js';
import renderData from './view.js';

document.addEventListener('DOMContentLoaded', () => {
  loadCities();
  const getWeatherButton = document.querySelector('#getWeather');
  if (getWeatherButton) {
    getWeatherButton.addEventListener('click', function () {
      const citySelect = document.querySelector('#city');
      const [lat, lon] = citySelect.value.split(',');

      fetch(
        `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`
      )
        .then((response) => response.json())
        .then((data) => {
          const weather = data.dataseries[0];
          const temp = weather.temp2m;
          const weatherType = weather.weather;
          renderData(citySelect, temp, weatherType);
        })
        .catch((error) => console.error('Error fetching weather data:', error));
    });
  } else {
    console.error('Element with ID "getWeather" not found.');
  }
});
