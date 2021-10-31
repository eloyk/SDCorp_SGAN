import mongoose from 'mongoose';
import { DocumentoEstablecimiento } from './establecimiento';
import { DocProductoCompra } from './producto-compraTMP';
import { DocumentoProveedor } from './proveedor';
import { DocumentoTienda } from './tienda';
import { EstadoCompra } from '../types/estado-compra';

interface AtribCompraTMP {
  tienda: DocumentoTienda;
  establecimiento: DocumentoEstablecimiento;
  proveedor: DocumentoProveedor;
  estadoCompra?: EstadoCompra;
  productoCompraTMP: [DocProductoCompra];
  contadorProducto: number;
  totalCompra?: number;
  expiracion: Date;
  almacenId: string
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface DocCompraTMP extends mongoose.Document {
  tienda: DocumentoTienda;
  establecimiento: DocumentoEstablecimiento;
  proveedor: DocumentoProveedor;
  estadoCompra?: EstadoCompra;
  productoCompraTMP: [DocProductoCompra];
  contadorProducto: number;
  totalCompra?: number;
  expiracion: Date;
  almacenId: string
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelCompraTMP extends mongoose.Model<DocCompraTMP> {
  build(atrib: AtribCompraTMP): DocCompraTMP;
}

const schemaCompraTMP = new mongoose.Schema(
  {
    tienda: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tienda',
    },
    establecimiento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Establecimiento',
    },
    proveedor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Proveedor',
    },
    estadoCompra: {
      type: String,
      required: true,
      enum: Object.values(EstadoCompra),
      default: EstadoCompra.Creada,
    },
    productoCompraTMP: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductoCompraTMP',
      },
    ],
    contadorProducto: {
      type: Number,
      required: true,
      default: 0,
    },
    totalCompra: {
      type: Number,
      required: true,
      default: 0,
    },
    expiracion: {
      type: mongoose.Schema.Types.Date,
    },
    almacenId: {
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
      },
    },
  }
);

schemaCompraTMP.statics.build = (atrib: AtribCompraTMP) => {
  return new CompraTMP(atrib);
};

const CompraTMP = mongoose.model<DocCompraTMP, ModelCompraTMP>(
  'CompraTMP',
  schemaCompraTMP
);

export { CompraTMP };
