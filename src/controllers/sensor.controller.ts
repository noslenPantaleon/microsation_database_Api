import { Request, Response } from 'express';
import Sensor, { ISensor } from '../models/sensor';

import mqtt from 'mqtt';

// This function not work >_<
export const sensor = async (req: Request, res: Response) => {
  try {
    const client = mqtt.connect('mqtt://192.168.0.103', {
      username: 'noslen',
      password: '100loops',
    });

    const ssd1306topic = `${client.options.username}/esp32/humedad1`;

    client.on('connect', function () {
      console.log('connected');

      client.subscribe(ssd1306topic, function (err) {
        if (!err) {
          console.log('subscribed');

          client.publish(ssd1306topic, 'Hello from NodeJS');
        }
      });
    });

    client.on('message', function (topic, message) {
      // message is Buffer
      console.log(message.toString());
      client.end();
    });

    const register = await Sensor.create(req.body);

    await register.save();
    res.status(200).send({
      message: 'Llego apanay 🌱',
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: 'Error occurred in sensor',
    });
  }
};
