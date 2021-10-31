import mongoose from 'mongoose';

interface AtribColor {
  descripcion: string;
  colorUrl: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocumentoColor extends mongoose.Document {
  descripcion: string;
  colorUrl: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModeloColor extends mongoose.Model<DocumentoColor> {
  build(atrib: AtribColor): DocumentoColor;
}

const SchemaColor = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
      lowercase: true,
    },
    colorUrl: {
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

SchemaColor.statics.build = (atrib: AtribColor) => {
  return new Color(atrib);
};

const Color = mongoose.model<DocumentoColor, ModeloColor>(
  'Color',
  SchemaColor
);

export { Color };
