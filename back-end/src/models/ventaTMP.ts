import mongoose from 'mongoose';
import { DocProductoCompra } from './producto-compraTMP';
import { DocumentoTienda } from './tienda';
import { DocumentoEstablecimiento } from './establecimiento';
import { DocumentoCliente } from './cliente';
import { EstadoCompra } from '../types/estado-compra';

interface AtribVentaTMP {
  tienda: DocumentoTienda;
  establecimiento: DocumentoEstablecimiento;
  cliente: DocumentoCliente;
  estadoCompra?: EstadoCompra;
  productoCompraTMP: [DocProductoCompra];
  contadorProducto: number;
  totalVenta?: number;
  expiracion: Date;
  stockId: string
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface DocVentaTMP extends mongoose.Document {
  tienda: DocumentoTienda;
  establecimiento: DocumentoEstablecimiento;
  cliente: DocumentoCliente;
  estadoCompra?: EstadoCompra;
  productoCompraTMP: [DocProductoCompra];
  contadorProducto: number;
  totalVenta?: number;
  expiracion: Date;
  stockId: string
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelVentaTMP extends mongoose.Model<DocVentaTMP> {
  build(atrib: AtribVentaTMP): DocVentaTMP;
}

const schemaVentaTMP = new mongoose.Schema(
  {
    tienda: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tienda',
    },
    establecimiento: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Establecimiento',
    },
    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Cliente',
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
    totalVenta: {
      type: Number,
      required: true,
      default: 0,
    },
    expiracion: {
      type: mongoose.Schema.Types.Date,
    },
    stockId: {
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

schemaVentaTMP.statics.build = (atrib: AtribVentaTMP) => {
  return new VentaTMP(atrib);
};

const VentaTMP = mongoose.model<DocVentaTMP, ModelVentaTMP>(
  'ventaTMP',
  schemaVentaTMP
);

export { VentaTMP };
