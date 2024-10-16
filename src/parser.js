import cityCoordinates from '../assets/city_coordinates.csv';

export default () => {
  const citySelect = document.querySelector('#city');
  cityCoordinates.slice(1).forEach((city) => {
    const latitude = city[0];
    const longitude = city[1];
    const cityName = city[2];
    const country = city[3];
    const option = document.createElement('option');
    option.value = `${latitude},${longitude}`;
    option.textContent = `${cityName}, ${country}`;
    citySelect.appendChild(option);
  });
};
