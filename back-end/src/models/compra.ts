import mongoose from 'mongoose';
import { DocumentoProveedor } from './proveedor';
import { DocProductoCompra } from './producto-compra';
import { DocumentoTienda } from './tienda';
import { DocumentoEstablecimiento } from './establecimiento';
import { EstadoCompra } from '../types/estado-compra';

interface AtribCompra {
  id?: string;
  tienda: DocumentoTienda;
  establecimiento: DocumentoEstablecimiento;
  proveedor: DocumentoProveedor;
  estadoCompra?: EstadoCompra;
  producto: [DocProductoCompra];
  cantidadProducto?: number;
  totalCompra: number;
  expiracion: Date;
  facturaId?: string;
  almacenId: string
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocCompra extends mongoose.Document {
  tienda: DocumentoTienda;
  establecimiento: DocumentoEstablecimiento;
  proveedor: DocumentoProveedor;
  estadoCompra?: EstadoCompra;
  producto: [DocProductoCompra];
  cantidadProducto?: number;
  totalCompra: number;
  expiracion: Date;
  facturaId?: string;
  almacenId: string
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelCompra extends mongoose.Model<DocCompra> {
  build(atrib: AtribCompra): DocCompra;
}

const schemaCompra = new mongoose.Schema(
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
    totalCompra: {
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

schemaCompra.statics.build = (atrib: AtribCompra) => {
  return new Compra({
    _id: atrib.id,
    tienda: atrib.tienda,
    establecimiento: atrib.establecimiento,
    proveedor: atrib.proveedor,
    estadoCompra: atrib.estadoCompra,
    producto: atrib.producto,
    cantidadProducto: atrib.cantidadProducto,
    totalCompra: atrib.totalCompra,
    expiracion: atrib.expiracion,
    facturaId: atrib.facturaId,
    almacenId: atrib.almacenId,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta,
  });
};

const Compra = mongoose.model<DocCompra, ModelCompra>('Compra', schemaCompra);

export { Compra };
