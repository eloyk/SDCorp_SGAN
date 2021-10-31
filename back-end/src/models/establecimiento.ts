import mongoose from 'mongoose';

interface AtribEstablecimiento {
  descripcion: string;
  subNombre: string;
  direccion?: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocumentoEstablecimiento extends mongoose.Document {
  descripcion: string;
  subNombre: string;
  direccion?: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModeloEstablecimiento extends mongoose.Model<DocumentoEstablecimiento> {
  build(atrib: AtribEstablecimiento): DocumentoEstablecimiento;
}

const SchemaEstablecimiento = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
      lowercase: true,
    },
    subNombre: {
      type: String,
      required: true,
      lowercase: true,
    },
    direccion: {
      type: String,
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

SchemaEstablecimiento.statics.build = (atrib: AtribEstablecimiento) => {
  return new Establecimiento(atrib);
};

const Establecimiento = mongoose.model<DocumentoEstablecimiento, ModeloEstablecimiento>(
  'Establecimiento',
  SchemaEstablecimiento
);

export { Establecimiento };
