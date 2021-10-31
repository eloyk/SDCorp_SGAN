import mongoose from 'mongoose';
import { DocPago } from './pago';

interface AtribEnvioCliente {
  pago?: DocPago;
  direccionEnvioId: string;
  urlImagenFactura: string;
  procesoEnvio: [string];
  estadoEnvio: string;
  fechaAlta?: Date;
  fechaFinProceso?: Date;
}

interface DocEnvioCliente extends mongoose.Document {
  pago?: DocPago;
  direccionEnvioId: string;
  urlImagenFactura: string;
  procesoEnvio: [string];
  estadoEnvio: string;
  fechaAlta?: Date;
  fechaFinProceso?: Date;
}

interface ModelEnvioCliente extends mongoose.Model<DocEnvioCliente> {
  build(atrib: AtribEnvioCliente): DocEnvioCliente;
}

const schemaEnvioCliente = new mongoose.Schema(
  {
    pago: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Pago',
    },
    direccionEnvioId: {
      type: String,
      required: true,
    },
    urlImagenFactura: {
      type: String,
      required: true,
    },
    procesoEnvio: [{
      type: String,
      required: true,
    }],
    estadoEnvio: {
      type: String,
      required: true,
    },
    fechaAlta: {
      type: mongoose.Schema.Types.Date,
      default: Date.now,
    },
    fechaFinProceso: {
      type: mongoose.Schema.Types.Date,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

schemaEnvioCliente.statics.build = (atrib: AtribEnvioCliente) => {
  return new EnvioCliente(atrib);
};

const EnvioCliente = mongoose.model<DocEnvioCliente, ModelEnvioCliente>(
  'EnvioCliente',
  schemaEnvioCliente
);

export { EnvioCliente };
