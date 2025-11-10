import axios from 'axios';

export async function getCurrentWeather(city: string) {
  const apiKey = process.env.OPENWEATHER_KEY;
  if (!apiKey) throw new Error('Chave de API não definida');

  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric&lang=pt_br`
    );
    const data = response.data;
    return {
      temp: data.main.temp,
      description: data.weather[0].description,
      icon: data.weather[0].icon,
      humidity: data.main.humidity,
      wind_speed: data.wind.speed
    };
  } catch (error) {
    console.error('Erro ao buscar dados da API:', error);
    throw error;
  }
}
