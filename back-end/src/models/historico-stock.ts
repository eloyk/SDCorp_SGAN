import mongoose from 'mongoose';

export interface AtribHistoricoStock {
  id: string;
  descripcion: string;
  tiendaId: string;
  establecimientoId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocHistoricoStock extends mongoose.Document {
  descripcion: string;
  tiendaId: string;
  establecimientoId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelHistoricoStock extends mongoose.Model<DocHistoricoStock> {
  build(atrib: AtribHistoricoStock): DocHistoricoStock;
}

const schemaHistoricoStock = new mongoose.Schema(
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

schemaHistoricoStock.statics.build = (atrib: AtribHistoricoStock) => {
  return new HistoricoStock({
    _id: atrib.id,
    descripcion: atrib.descripcion,
    tiendaId: atrib.tiendaId,
    establecimientoId: atrib.establecimientoId,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta
  });
};

const HistoricoStock = mongoose.model<DocHistoricoStock, ModelHistoricoStock>(
  'HistoricoStock',
  schemaHistoricoStock
);

export { HistoricoStock };
