import mongoose from 'mongoose';

interface AtribImagen {
  descripcion: string;
  urlImagen: string;
  colorId: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocumentoImagen extends mongoose.Document {
  descripcion: string;
  urlImagen: string;
  colorId: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModeloImagen extends mongoose.Model<DocumentoImagen> {
  build(atrib: AtribImagen): DocumentoImagen;
}

const SchemaImagen = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
      lowercase: true,
    },
    urlImagen: {
      type: String,
      required: true,
    },
    colorId: {
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

SchemaImagen.statics.build = (atrib: AtribImagen) => {
  return new Imagen(atrib);
};

const Imagen = mongoose.model<DocumentoImagen, ModeloImagen>(
  'Imagen',
  SchemaImagen
);

export { Imagen };