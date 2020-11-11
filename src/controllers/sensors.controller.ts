import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import mqtt from 'mqtt';

dotenv.config();

// This function not work >_<
export const sensors = async (req: Request, res: Response) => {
  try {
    const client = mqtt.connect(`mqtt://${process.env.BROCKER_MQTT_IP}`, {
      username: process.env.BROCKER_MQTT_USER,
      password: process.env.BROCKER_MQTT_USER,
    });

    const ssd1306topic = `${client.options.username}/esp32/humedad1`;

    client.on('connect', function () {
      console.log('connected');
      client.subscribe(ssd1306topic, function (err) {
        if (!err) {
          console.log('Apanai subscribed');

          client.publish(ssd1306topic, 'Apanai subscribed');
        }
      });
    });

    client.on('message', (topic, message: any) => {
      // message is Buffer
      res.status(200).send({
        topic,
        message,
      });
      client.end();
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: 'Error occurred in sensor',
    });
  }
};
