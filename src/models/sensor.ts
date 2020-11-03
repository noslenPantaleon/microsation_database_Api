import { model, Schema, Document } from 'mongoose';

export interface ISensor extends Document {
  temperature: string;
  humedad: string;
}

const sensorSchema = new Schema({
  humedad: { type: String, default: '' },
  temperature: { type: String, default: '' },
});

export default model<ISensor>('Sensor', sensorSchema);
