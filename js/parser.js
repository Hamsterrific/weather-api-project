import Papa from 'papaparse';

export default function loadCities() {
  fetch('city_coordinates.csv')
    .then((response) => response.text())
    .then((csvText) => {
      const cities = Papa.parse(csvText, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
      }).data;

      const citySelect = document.querySelector('#city');
      cities.forEach((city) => {
        const option = document.createElement('option');
        option.value = `${city.latitude},${city.longitude}`;
        option.textContent = `${city.city}, ${city.country}`;
        citySelect.appendChild(option);
      });
    })
    .catch((error) => console.error('Error loading CSV:', error));
}
