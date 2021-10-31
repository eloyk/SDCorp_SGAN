import mongoose from 'mongoose';

interface AtribManejadorPrecio {
  productoId: string;
  unidadMedidaId: string;
  medidaProductoId: string;
  descripcion: string;
  tipoPrecio: string;
  precio: number;
  porcientoDescuento?: number;
  estado?: boolean;
}

export interface DocManejadorPrecio extends mongoose.Document {
  productoId: string;
  unidadMedidaId: string;
  medidaProductoId: string;
  descripcion: string;
  tipoPrecio: string;
  precio: number;
  porcientoDescuento?: number
  estado?: boolean;
}

interface ModelManejadorPrecio extends mongoose.Model<DocManejadorPrecio> {
  build(atrib: AtribManejadorPrecio): DocManejadorPrecio;
}

const schemaManejadorPrecio = new mongoose.Schema(
  {
    productoId: {
      type: String,
      required: true,
    },
    unidadMedidaId: {
      type: String,
      required: true,
    },
    medidaProductoId: {
      type: String,
      required: true,
    },
    descripcion: {
      type: String,
      required: true,
      lowercase: true,
    },
    tipoPrecio: {
      type: String,
      required: true,
      lowercase: true,
    },
    precio: {
      type: Number,
      required: true,
    },
    porcientoDescuento: {
      type: Number,
      default: 0
    },
    estado: {
      type: Boolean,
      default: true,
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

schemaManejadorPrecio.statics.build = (atrib: AtribManejadorPrecio) => {
  return new ManejadorPrecio(atrib);
};

const ManejadorPrecio = mongoose.model<
  DocManejadorPrecio,
  ModelManejadorPrecio
>('ManejadorPrecio', schemaManejadorPrecio);

export { ManejadorPrecio };
