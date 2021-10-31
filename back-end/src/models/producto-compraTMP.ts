import mongoose from 'mongoose';

interface AtribProductoCompraTMP {
  productoId: string;
  descripcionProducto: string;
  tipoProducto: string;
  unidadMedidaId: string;
  literal: string;
  literalMedidaProducto: string;
  colorId: string;
  manejadorPrecioId: string;
  descripcionManejadorPrecio: string;
  tipoPrecio: string;
  precioProducto: number;
  cantidadProducto: number;
  sumatoriaPrecioProducto?: number;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
}

export interface DocProductoCompra extends mongoose.Document {
  productoId: string;
  descripcionProducto: string;
  tipoProducto: string;
  unidadMedidaId: string;
  literal: string;
  literalMedidaProducto: string;
  colorId: string;
  manejadorPrecioId: string;
  descripcionManejadorPrecio: string;
  tipoPrecio: string;
  precioProducto: number;
  cantidadProducto: number;
  sumatoriaPrecioProducto?: number;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
}

interface ModelProductoCompraTMP extends mongoose.Model<DocProductoCompra> {
  build(atrib: AtribProductoCompraTMP): DocProductoCompra;
}

const schemaProductoCompraTMP = new mongoose.Schema(
  {
    productoId: {
      type: String,
      required: true,
    },
    descripcionProducto: {
      type: String,
      required: true,
    },
    tipoProducto: {
      type: String,
      required: true,
    },
    unidadMedidaId: {
      type: String,
      required: true,
    },
    literal: {
      type: String,
      required: true,
    },
    literalMedidaProducto: {
      type: String,
      required: true,
    },
    colorId: {
      type: String,
      required: true,
    },
    manejadorPrecioId: {
      type: String,
      required: true,
    },
    descripcionManejadorPrecio: {
      type: String,
      required: true,
    },
    tipoPrecio: {
      type: String,
      required: true,
    },
    precioProducto: {
      type: Number,
      required: true,
      default: 0,
    },
    cantidadProducto: {
      type: Number,
      required: true,
      default: 0,
    },
    sumatoriaPrecioProducto: {
      type: Number,
      required: true,
      default: 0,
    },
    tiendaId: {
      type: String,
      required: true,
    },
    usuarioIdAlta: {
      type: String,
      required: true,
    },
    emailUsuarioAlta: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.tiendaId;
      },
    },
  }
);

schemaProductoCompraTMP.statics.build = (atrib: AtribProductoCompraTMP) => {
  return new ProductoCompraTMP(atrib);
};

const ProductoCompraTMP = mongoose.model<
  DocProductoCompra,
  ModelProductoCompraTMP
>('ProductoCompraTMP', schemaProductoCompraTMP);

export { ProductoCompraTMP };
