import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import * as WeatherAPI from './api/WeatherAPI';
import City from './models/City';
import path from 'path';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public'))); // Serve frontend

// Conexão com MongoDB
mongoose.connect(process.env.MONGO_URI || '')
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar no MongoDB:', err));

// Rotas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Adicionar cidade
app.post('/api/cities', async (req, res) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: 'Nome da cidade é obrigatório' });

    const weatherData = await WeatherAPI.getCurrentWeather(name);

    const city = new City({
      name,
      weather: weatherData
    });

    await city.save();
    res.json(city);
  } catch (error) {
    console.error('Erro ao adicionar cidade:', error);
    res.status(500).json({ error: 'Erro ao adicionar cidade' });
  }
});

// Atualizar cidade
app.put('/api/cities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const city = await City.findById(id);
    if (!city) return res.status(404).json({ error: 'Cidade não encontrada' });

    const weatherData = await WeatherAPI.getCurrentWeather(city.name);
    city.weather = weatherData;

    await city.save();
    res.json(city);
  } catch (error) {
    console.error('Erro ao atualizar cidade:', error);
    res.status(500).json({ error: 'Erro ao atualizar cidade' });
  }
});

// Deletar cidade
app.delete('/api/cities/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await City.findByIdAndDelete(id);
    res.json({ message: 'Cidade deletada com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar cidade:', error);
    res.status(500).json({ error: 'Erro ao deletar cidade' });
  }
});

// Listar cidades
app.get('/api/cities', async (req, res) => {
  try {
    const cities = await City.find();
    res.json(cities);
  } catch (error) {
    console.error('Erro ao listar cidades:', error);
    res.status(500).json({ error: 'Erro ao listar cidades' });
  }
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
