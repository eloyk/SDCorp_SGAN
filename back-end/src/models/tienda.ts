import mongoose from 'mongoose';

interface AtribTienda {
  nombreTienda: string;
  clasifTienda: string;
  tipoTienda: string;
  duenio: string;
  telefono?: string;
  emailTienda?: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocumentoTienda extends mongoose.Document {
  nombreTienda: string;
  clasifTienda: string;
  tipoTienda: string;
  duenio: string;
  telefono?: string;
  emailTienda?: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModeloTienda extends mongoose.Model<DocumentoTienda> {
  build(atrib: AtribTienda): DocumentoTienda;
}

const SchemaTienda = new mongoose.Schema(
  {
    nombreTienda: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true
    },
    clasifTienda: {
      type: String,
      required: true,
    },
    tipoTienda: {
      type: String,
      default: false,
    },
    duenio: {
      type: String,
      default: true,
    },
    telefono: {
      type: String,
    },
    emailTienda: {
      type: String,
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

SchemaTienda.statics.build = (atrib: AtribTienda) => {
  return new Tienda(atrib);
};

const Tienda = mongoose.model<DocumentoTienda, ModeloTienda>(
  'Tienda',
  SchemaTienda
);

export { Tienda };
