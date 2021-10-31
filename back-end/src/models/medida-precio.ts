import mongoose from 'mongoose';
import { DocumentoUnidadMedida } from './unidad-medida';
import { DocumentoMedidaProducto } from './medida-producto';
import { DocManejadorPrecio } from './manejador-precio';

interface AtribMedidaPrecio {
  productoId: string;
  unidadMedida?: DocumentoUnidadMedida;
  medidaProducto?: DocumentoMedidaProducto;
  manejadorPrecio?: [DocManejadorPrecio];  
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocMedidaPrecio extends mongoose.Document {
  productoId: string;
  unidadMedida?: DocumentoUnidadMedida;
  medidaProducto?: DocumentoMedidaProducto;
  manejadorPrecio?: [DocManejadorPrecio];  
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelMedidaPrecio extends mongoose.Model<DocMedidaPrecio> {
  build(atrib: AtribMedidaPrecio): DocMedidaPrecio;
}

const schemaMedidaPrecio = new mongoose.Schema(
  {
    productoId: {
      type: String,
      require: true
    },
    unidadMedida: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'UnidadMedida',
    },
    medidaProducto: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MedidaProducto',
    },
    manejadorPrecio: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ManejadorPrecio',
      },
    ],
    usuarioIdAlta: {
      type: String,
    },
    emailUsuarioAlta: {
      type: String,
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

schemaMedidaPrecio.statics.build = (atrib: AtribMedidaPrecio) => {
  return new MedidaPrecio(atrib);
};

const MedidaPrecio = mongoose.model<DocMedidaPrecio, ModelMedidaPrecio>(
  'MedidaPrecio',
  schemaMedidaPrecio
);

export { MedidaPrecio };