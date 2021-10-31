import mongoose from 'mongoose';

interface AtribMedidaProducto {
  descripcion: string;
  literal: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocumentoMedidaProducto extends mongoose.Document {
  descripcion: string;
  literal: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModeloMedidaProducto extends mongoose.Model<DocumentoMedidaProducto> {
  build(atrib: AtribMedidaProducto): DocumentoMedidaProducto;
}

const SchemaMedidaProducto = new mongoose.Schema(
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

SchemaMedidaProducto.statics.build = (atrib: AtribMedidaProducto) => {
  return new MedidaProducto(atrib);
};

const MedidaProducto = mongoose.model<DocumentoMedidaProducto, ModeloMedidaProducto>(
  'MedidaProducto',
  SchemaMedidaProducto
);

export { MedidaProducto };
