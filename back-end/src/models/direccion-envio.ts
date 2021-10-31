import mongoose from 'mongoose';

interface AtribDireccionEnvio {
  nombreCompleto: string;
  direccionLinea1: string;
  direccionLinea2?: string;
  ciudad: string;
  estadoProvincia?: string;
  codigoPostal?: string;
  regionPais?: string;
  telefono?: string;
  clienteId?: string;
  esPrincipal?: boolean;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocumentoDireccionEnvio extends mongoose.Document {
  nombreCompleto: string;
  direccionLinea1: string;
  direccionLinea2?: string;
  ciudad: string;
  estadoProvincia?: string;
  codigoPostal?: string;
  regionPais?: string;
  telefono?: string;
  clienteId?: string;
  esPrincipal?: boolean;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModeloDireccionEnvio extends mongoose.Model<DocumentoDireccionEnvio> {
  build(atrib: AtribDireccionEnvio): DocumentoDireccionEnvio;
}

const SchemaDireccionEnvio = new mongoose.Schema(
  {
    nombreCompleto: {
      type: String,
      required: true,
      lowercase: true,
    },
    direccionLinea1: {
      type: String,
      required: true,
    },
    direccionLinea2: {
      type: String,
    },
    ciudad: {
      type: String,
      require: true,
    },
    estadoProvincia: {
      type: String,
    },
    codigoPostal: {
      type: String,
    },
    regionPais: {
      type: String,
    },
    telefono: {
      type: String,
    },
    clienteId: {
      type: String,
    },
    esPrincipal: {
      type: Boolean,
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

SchemaDireccionEnvio.statics.build = (atrib: AtribDireccionEnvio) => {
  return new DireccionEnvio(atrib);
};

const DireccionEnvio = mongoose.model<DocumentoDireccionEnvio, ModeloDireccionEnvio>(
  'DireccionEnvio',
  SchemaDireccionEnvio
);

export { DireccionEnvio };
