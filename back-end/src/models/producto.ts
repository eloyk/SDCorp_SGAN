import mongoose from 'mongoose';
import { DocMedidaPrecio } from './medida-precio';
import { DocColorImagen } from './color-imagen';

interface AtribProducto {
  producto: string
  descripcion: [string];
  codigoBarra?: string;
  tipoProducto: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
  medidaPrecio?: [DocMedidaPrecio];
  colorImagen?: [DocColorImagen];
}

interface DocProducto extends mongoose.Document {
  producto: string
  descripcion: [string];
  codigoBarra?: string;
  tipoProducto: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
  medidaPrecio?: [DocMedidaPrecio];
  colorImagen?: [DocColorImagen];
}

interface ModelProducto extends mongoose.Model<DocProducto> {
  build(atrib: AtribProducto): DocProducto;
}

const schemaProducto = new mongoose.Schema(
  {
    producto: {
      type: String,
      required: true,
      lowercase: true,
    },
    descripcion: [
      {
        type: String,
        required: true,
        lowercase: true,
      }
    ],
    codigoBarra: {
      type: String,
    },
    tipoProducto: {
      type: String,
      required: true,
    },
    tiendaId: {
      type: String,
      required: true,
    },
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
    medidaPrecio: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'MedidaPrecio',
      },
    ],
    colorImagen: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ColorImagen',
      },
    ],
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

schemaProducto.statics.build = (atrib: AtribProducto) => {
  return new Producto(atrib);
};

const Producto = mongoose.model<DocProducto, ModelProducto>(
  'Producto',
  schemaProducto
);

export { Producto };
