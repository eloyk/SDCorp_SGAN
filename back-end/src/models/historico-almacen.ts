import mongoose from 'mongoose';

export interface AtribHistoricoAlmacen {
  id: string;
  descripcion: string;
  tiendaId: string;
  establecimientoId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocHistoricoAlmacen extends mongoose.Document {
  descripcion: string;
  tiendaId: string;
  establecimientoId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelHistoricoAlmacen extends mongoose.Model<DocHistoricoAlmacen> {
  build(atrib: AtribHistoricoAlmacen): DocHistoricoAlmacen;
}

const schemaHistoricoAlmacen = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
      lowercase: true,
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

schemaHistoricoAlmacen.statics.build = (atrib: AtribHistoricoAlmacen) => {
  return new HistoricoAlmacen({
    _id: atrib.id,
    descripcion: atrib.descripcion,
    tiendaId: atrib.tiendaId,
    establecimientoId: atrib.establecimientoId,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta
  });
};

const HistoricoAlmacen = mongoose.model<DocHistoricoAlmacen, ModelHistoricoAlmacen>(
  'HistoricoAlmacen',
  schemaHistoricoAlmacen
);

export { HistoricoAlmacen };
