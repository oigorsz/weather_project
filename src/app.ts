import "dotenv/config";
import { getWeather } from "./api/WeatherAPI";

async function main() {
  try {
    const city = "São Paulo";
    const data = await getWeather(city);

    console.log(`Clima em ${city}:`);
    console.log(`Temperatura: ${data.main.temp}°C`);
    console.log(`Condição: ${data.weather[0].description}`);
  } catch {
    console.log("Falha ao obter dados da API.");
  }
}

main();
