import mongoose from 'mongoose';

export interface AtribAlmacen {
  descripcion: string;
  tiendaId: string;
  establecimientoId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocAlmacen extends mongoose.Document {
  descripcion: string;
  tiendaId: string;
  establecimientoId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelAlmacen extends mongoose.Model<DocAlmacen> {
  build(atrib: AtribAlmacen): DocAlmacen;
}

const schemaAlmacen = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    tiendaId: {
      type: String,
      required: true,
    },
    establecimientoId: {
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

schemaAlmacen.statics.build = (atrib: AtribAlmacen) => {
  return new Almacen(atrib);
};

const Almacen = mongoose.model<DocAlmacen, ModelAlmacen>(
  'Almacen',
  schemaAlmacen
);

export { Almacen };
