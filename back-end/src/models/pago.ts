import mongoose from 'mongoose';
import { DocVenta } from './venta';

interface AtribPago {
  venta: DocVenta;
  concepto: string;
  tipoPago: string;
  transaccion: string;
  estadoPago: string
  fechaAlta?: Date;
}

export interface DocPago extends mongoose.Document {
  venta: DocVenta;
  concepto: string;
  tipoPago: string;
  transaccion: string;
  estadoPago: string
  fechaAlta?: Date;
}

interface ModelPago extends mongoose.Model<DocPago> {
  build(atrib: AtribPago): DocPago;
}

const schemaPago = new mongoose.Schema(
  {
    venta: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Venta',
    },
    concepto: {
      type: String,
      required: true,
    },
    tipoPago: {
      type: String,
      required: true,
    },
    transaccion: {
      type: String,
      required: true,
    },
    estadoPago: {
      type: String,
      required: true,
    },
    fechaAlta: {
      type: mongoose.Schema.Types.Date,
      default: Date.now,
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

schemaPago.statics.build = (atrib: AtribPago) => {
  return new Pago(atrib);
};

const Pago = mongoose.model<DocPago, ModelPago>(
  'Pago',
  schemaPago
);

export { Pago };
