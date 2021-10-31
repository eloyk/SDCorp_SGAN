import mongoose from 'mongoose';
import { DocumentoColor } from './color';
import { DocumentoImagen } from './imagen';

interface AtribColorImagen {
  productoId: string;
  color?: DocumentoColor;
  imagen?: [DocumentoImagen];  
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocColorImagen extends mongoose.Document {
  productoId: string;
  color?: DocumentoColor;
  imagen?: [DocumentoImagen];  
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelColorImagen extends mongoose.Model<DocColorImagen> {
  build(atrib: AtribColorImagen): DocColorImagen;
}

const schemaColorImagen = new mongoose.Schema(
  {
    productoId: {
      type: String,
      require: true
    },
    color: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Color',
    },
    imagen: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Imagen',
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

schemaColorImagen.statics.build = (atrib: AtribColorImagen) => {
  return new ColorImagen(atrib);
};

const ColorImagen = mongoose.model<DocColorImagen, ModelColorImagen>(
  'ColorImagen',
  schemaColorImagen
);

export { ColorImagen };