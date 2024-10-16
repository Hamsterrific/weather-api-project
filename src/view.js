import weatherIcons from '../src/weather-icons.js';
import weatherText from '../src/weather-text.js';

const selectIconSrc = (weatherType) => {
  return weatherIcons[weatherType];
};

const createIcon = (weatherType) => {
  const weatherIconSrc = selectIconSrc(weatherType);
  const weatherIcon = document.createElement('img');
  weatherIcon.id = 'weatherIcon';
  weatherIcon.src = weatherIconSrc;
  weatherIcon.alt = 'Weather Icon';
  weatherIcon.width = 131;
  weatherIcon.height = 66;
  return weatherIcon;
};

const renderIcon = (weatherType) => {
  const existingIcon = document.querySelector('#weatherIcon');
  if (existingIcon) {
    existingIcon.remove();
  }

  const weatherIcon = createIcon(weatherType);
  const weatherDisplay = document.querySelector('.weather-display');
  weatherDisplay.appendChild(weatherIcon);
};

const renderWeatherType = (weatherType) => {
  return `Weather: ${weatherText[weatherType]}`;
}

const renderSelect = (citySelect, { weather, temp2m, wind10m }) => {
  const { speed, direction } = wind10m;
  document.querySelector('#cityName').textContent =
    citySelect.options[citySelect.selectedIndex].text;
  document.querySelector('#temperature').textContent = `Temperature: ${temp2m}°C`;
  document.querySelector('#wind').textContent = `Wind: ${speed} ${direction}`;
  document.querySelector(
    '#description'
  ).textContent = renderWeatherType(weather);
};

export default (citySelect, weather) => {
  renderSelect(citySelect, weather);
  renderIcon(weather.weather);
};
