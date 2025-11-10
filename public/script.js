const API_URL = 'http://localhost:3001/api/cities';

async function fetchCities() {
  const response = await fetch(API_URL);
  const cities = await response.json();
  renderCities(cities);
}

async function addCity(cityName) {
  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: cityName })
    });
    if (!response.ok) throw new Error('Falha ao adicionar cidade');
    const city = await response.json();
    fetchCities();
  } catch (error) {
    console.error('Erro ao adicionar cidade:', error);
    alert('Erro ao adicionar cidade');
  }
}

async function deleteCity(cityId) {
  try {
    await fetch(`${API_URL}/${cityId}`, { method: 'DELETE' });
    fetchCities();
  } catch (error) {
    console.error('Erro ao deletar cidade:', error);
  }
}

async function refreshCity(cityId) {
  try {
    await fetch(`${API_URL}/${cityId}`, { method: 'PUT' });
    fetchCities();
  } catch (error) {
    console.error('Erro ao atualizar cidade:', error);
  }
}

function renderCities(cities) {
  const container = document.getElementById('cities');
  container.innerHTML = '';
  cities.forEach(city => {
    const card = document.createElement('div');
    card.className = 'city-card';
    card.innerHTML = `
      <h3>${city.name}</h3>
      <p>${city.weather.temp}°C - ${city.weather.description}</p>
      <p>Umidade: ${city.weather.humidity}% | Vento: ${city.weather.wind_speed}m/s</p>
      <button onclick="refreshCity('${city._id}')">🔄</button>
      <button onclick="deleteCity('${city._id}')">🗑️</button>
    `;
    container.appendChild(card);
  });
}

document.getElementById('searchBtn').addEventListener('click', () => {
  const cityInput = document.getElementById('cityInput').value;
  if (cityInput) addCity(cityInput);
});

fetchCities();
