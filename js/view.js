import weatherIcons from './weather-icons.js';
import weatherText from './weather-text.js';

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

const renderSelect = (citySelect, temp, weatherType) => {
  document.querySelector('#cityName').textContent =
    citySelect.options[citySelect.selectedIndex].text;
  document.querySelector('#temperature').textContent = `Temperature: ${temp}°C`;
  document.querySelector(
    '#description'
  ).textContent = renderWeatherType(weatherType);
};

export default (citySelect, temp, weatherType) => {
  renderSelect(citySelect, temp, weatherType);
  renderIcon(weatherType);
};
