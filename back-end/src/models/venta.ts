import mongoose from 'mongoose';
import { EstadoCompra } from '../types/estado-compra';
import { DocumentoCliente } from './cliente';
import { DocumentoEstablecimiento } from './establecimiento';
import { DocProductoCompra } from './producto-compra';
import { DocumentoTienda } from './tienda';

interface AtribVenta {
  id?: string;
  tienda: DocumentoTienda;
  establecimiento: DocumentoEstablecimiento;
  cliente: DocumentoCliente;
  estadoCompra?: EstadoCompra;
  producto: [DocProductoCompra];
  cantidadProducto?: number;
  totalVenta: number;
  expiracion: Date;
  facturaId?: string;
  stockId: string
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocVenta extends mongoose.Document {
  tienda: DocumentoTienda;
  establecimiento: DocumentoEstablecimiento;
  cliente: DocumentoCliente;
  estadoCompra?: EstadoCompra;
  producto: [DocProductoCompra];
  cantidadProducto?: number;
  totalVenta: number;
  expiracion: Date;
  facturaId?: string;
  stockId: string
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelVenta extends mongoose.Model<DocVenta> {
  build(atrib: AtribVenta): DocVenta;
}

const schemaVenta = new mongoose.Schema(
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
    producto: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'ProductoCompra',
      },
    ],
    cantidadProducto: {
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
    facturaId: {
      type: String,
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

schemaVenta.statics.build = (atrib: AtribVenta) => {
  return new Venta({
    _id: atrib.id,
    tienda: atrib.tienda,
    establecimiento: atrib.establecimiento,
    cliente: atrib.cliente,
    estadoCompra: atrib.estadoCompra,
    producto: atrib.producto,
    cantidadProducto: atrib.cantidadProducto,
    totalVenta: atrib.totalVenta,
    expiracion: atrib.expiracion,
    facturaId: atrib.facturaId,
    stockId: atrib.stockId,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta,
  });
};

const Venta = mongoose.model<DocVenta, ModelVenta>('Venta', schemaVenta);

export { Venta };
