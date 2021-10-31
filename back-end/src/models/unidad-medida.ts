import mongoose from 'mongoose';

interface AtribUnidadMedida {
  descripcion: string;
  literal: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocumentoUnidadMedida extends mongoose.Document {
  descripcion: string;
  literal: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModeloUnidadMedida extends mongoose.Model<DocumentoUnidadMedida> {
  build(atrib: AtribUnidadMedida): DocumentoUnidadMedida;
}

const SchemaUnidadMedida = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
      lowercase: true,
    },
    literal: {
      type: String,
      required: true,
      lowercase: true,
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

SchemaUnidadMedida.statics.build = (atrib: AtribUnidadMedida) => {
  return new UnidadMedida(atrib);
};

const UnidadMedida = mongoose.model<DocumentoUnidadMedida, ModeloUnidadMedida>(
  'UnidadMedida',
  SchemaUnidadMedida
);

export { UnidadMedida };
