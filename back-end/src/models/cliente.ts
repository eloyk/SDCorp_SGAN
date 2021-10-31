import mongoose from 'mongoose';

interface AtribCliente {
  nombres: string;
  apellidos: string;
  telefono?: string;
  direccion?: string;
  tiendaId: string;
  correoElectronico?: string;
  tipoDocumento?: string;
  numeroDocumento?: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocumentoCliente extends mongoose.Document {
  nombres: string;
  apellidos: string;
  telefono?: string;
  direccion?: string;
  tiendaId: string;
  correoElectronico?: string;
  tipoDocumento?: string;
  numeroDocumento?: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModeloCliente extends mongoose.Model<DocumentoCliente> {
  build(atrib: AtribCliente): DocumentoCliente;
}

const SchemaCliente = new mongoose.Schema(
  {
    nombres: {
      type: String,
      required: true,
      lowercase: true,
    },
    apellidos: {
      type: String,
      required: true,
      lowercase: true,
    },
    telefono: {
      type: String,
    },
    direccion: {
      type: String,
    },
    tiendaId: {
      type: String,
      required: true,
    },
    correoElectronico: {
      type: String,
    },
    tipoDocumento: {
      type: String,
    },
    numeroDocumento: {
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

SchemaCliente.statics.build = (atrib: AtribCliente) => {
  return new Cliente(atrib);
};

const Cliente = mongoose.model<DocumentoCliente, ModeloCliente>(
  'Cliente',
  SchemaCliente
);

export { Cliente };
