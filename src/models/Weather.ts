import { Schema, model, Document } from "mongoose";

export interface IWeather extends Document {
    city: string;
    timestamp: string;
    temperature: number;
    description: string;
    icon: string;
    humidity: number;
    windSpeed: number;
}

const WeatherSchema = new Schema<IWeather>({
    city: { type: String, required: true },
    timestamp: { type: String, required: true },
    temperature: { type: Number, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true },
    humidity: { type: Number, required: true },
    windSpeed: { type: Number, required: true },
});

export const WeatherModel = model<IWeather>("Weather", WeatherSchema);
