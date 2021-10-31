import mongoose from 'mongoose';

interface AtribProveedor {
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

export interface DocumentoProveedor extends mongoose.Document {
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

interface ModeloProveedor extends mongoose.Model<DocumentoProveedor> {
  build(atrib: AtribProveedor): DocumentoProveedor;
}

const SchemaProveedor = new mongoose.Schema(
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

SchemaProveedor.statics.build = (atrib: AtribProveedor) => {
  return new Proveedor(atrib);
};

const Proveedor = mongoose.model<DocumentoProveedor, ModeloProveedor>(
  'Proveedor',
  SchemaProveedor
);

export { Proveedor };
