import { Router } from 'express';
import City from '../models/City';
import WeatherAPI from '../api/WeatherAPI';

const router = Router();

// Listar todas as cidades
router.get('/', async (req, res) => {
    try {
        const cities = await City.find();
        res.json(cities);
    } catch (err: any) {
        res.status(500).json({ message: err.message });
    }
});

// Adicionar nova cidade
router.post('/', async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: 'Nome da cidade é obrigatório' });

    try {
        const weatherData = await WeatherAPI.getWeather(name);
        const city = new City({ name, weather: weatherData });
        await city.save();
        res.status(201).json(city);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

// Atualizar cidade (refresh)
router.put('/:id', async (req, res) => {
    try {
        const city = await City.findById(req.params.id);
        if (!city) return res.status(404).json({ message: 'Cidade não encontrada' });

        const weatherData = await WeatherAPI.getWeather(city.name);
        city.weather = weatherData;
        await city.save();

        res.json(city);
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

// Deletar cidade
router.delete('/:id', async (req, res) => {
    try {
        const city = await City.findByIdAndDelete(req.params.id);
        if (!city) return res.status(404).json({ message: 'Cidade não encontrada' });

        res.json({ message: 'Cidade deletada com sucesso' });
    } catch (err: any) {
        res.status(400).json({ message: err.message });
    }
});

export default router;
