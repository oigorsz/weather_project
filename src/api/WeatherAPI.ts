import axios from "axios";

const apiKey = process.env.OPENWEATHER_KEY;
const baseUrl = "https://api.openweathermap.org/data/2.5/weather"; // Endpoint atual do OpenWeather

export async function getWeather(city: string) {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: city,
        appid: apiKey,
        units: "metric", // celsius
        lang: "pt_br",   // idioma português
      },
    });

    return response.data;
  } catch (error: any) {
    console.error("Erro ao buscar dados da API:", error.message);
    throw error;
  }
}
