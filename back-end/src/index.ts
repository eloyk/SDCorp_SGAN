import { app } from './app';
import mongoose from 'mongoose';
import config from './config/config';

const iniciar = async () => {
  console.log('Iniciando pryecto');

try{  
  await mongoose.connect(config.DB.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });
  console.log('conectado a MongoDb');
} catch (err) {
  console.error(err);
}

  app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000');
  });
};

iniciar();
