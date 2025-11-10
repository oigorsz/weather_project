import mongoose, { Schema, Document } from 'mongoose';

interface Weather {
  temp: number;
  description: string;
  icon: string;
  humidity: number;
  wind_speed: number;
}

export interface CityDocument extends Document {
  name: string;
  weather: Weather;
}

const citySchema = new Schema<CityDocument>({
  name: { type: String, required: true },
  weather: { type: Object, required: true }
});

export default mongoose.model<CityDocument>('City', citySchema);
