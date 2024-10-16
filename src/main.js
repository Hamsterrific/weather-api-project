import loadCities from '../src/parser.js';
import renderData from '../src/view.js';
import '../src/css/master.css';

const getCityWeather = async (lat, lon) => {
  try {
    const response = await fetch(
      `https://www.7timer.info/bin/api.pl?lon=${lon}&lat=${lat}&product=civil&output=json`
    );
    const data = await response.json();
    const weather = data.dataseries[0];
    return weather;
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  loadCities();
  const getWeatherButton = document.querySelector('#getWeather');
  getWeatherButton.addEventListener('click', async function () {
    const citySelect = document.querySelector('#city');
    const [lat, lon] = citySelect.value.split(',');
    const weather = await getCityWeather(lat, lon);
    if (weather) {
      renderData(citySelect, weather);
    } else {
      console.error('Failed to retrieve weather data.');
    }
  });
});
