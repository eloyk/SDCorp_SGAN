import mongoose from 'mongoose';

interface AtribProductoCompra {
  id?: string;
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

interface ModelProductoCompra extends mongoose.Model<DocProductoCompra> {
  build(atrib: AtribProductoCompra): DocProductoCompra;
}

const schemaProductoCompra = new mongoose.Schema(
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
    },
    cantidadProducto: {
      type: Number,
      required: true,
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
    },
    emailUsuarioAlta: {
      type: String,
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

schemaProductoCompra.statics.build = (atrib: AtribProductoCompra) => {
  return new ProductoCompra({
    _id: atrib.id,
    productoId: atrib.productoId,
    descripcionProducto: atrib.descripcionProducto,
    tipoProducto: atrib.tipoProducto,
    unidadMedidaId: atrib.unidadMedidaId,
    literal: atrib.literal,
    literalMedidaProducto: atrib.literalMedidaProducto,
    colorId: atrib.colorId,
    manejadorPrecioId: atrib.manejadorPrecioId,
    descripcionManejadorPrecio: atrib.descripcionManejadorPrecio,
    tipoPrecio: atrib.tipoPrecio,
    precioProducto: atrib.precioProducto,
    cantidadProducto: atrib.cantidadProducto,
    sumatoriaPrecioProducto: atrib.sumatoriaPrecioProducto,
    tiendaId: atrib.tiendaId,
    usuarioIdAlta: atrib.usuarioIdAlta,
    emailUsuarioAlta: atrib.emailUsuarioAlta,
  });
};

const ProductoCompra = mongoose.model<DocProductoCompra, ModelProductoCompra>(
  'ProductoCompra',
  schemaProductoCompra
);

export { ProductoCompra };
