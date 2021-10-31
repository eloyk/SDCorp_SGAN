import mongoose from 'mongoose';

export interface AtribHistoricoStockDetalle {
  id: string;
  stockId: string;
  productoId: string;
  nombreProducto: string;
  cantidad: number;
  tipoProducto: string;
  tipoPrecio: string;
  managerPrecioId: string;
  descripcionPrecio: string;
  literalUnidadMedida: string;
  literalMedidaProducto: string;
  colorId: string;
  precioProducto: number;
  sumatoriaPrecioProducto: number;
  fechaUltimaConversion?: Date;
  usuarioUltimaCompra: string;
}

export interface DocHistoricoStockDetalle extends mongoose.Document {
  stockId: string;
  productoId: string;
  nombreProducto: string;
  cantidad: number;
  tipoProducto: string;
  tipoPrecio: string;
  managerPrecioId: string;
  descripcionPrecio: string;
  literalUnidadMedida: string;
  literalMedidaProducto: string;
  colorId: string;
  precioProducto: number;
  sumatoriaPrecioProducto: number;
  fechaUltimaConversion?: Date;
  usuarioUltimaCompra: string;
}

interface ModelHistoricoStockDetalle extends mongoose.Model<DocHistoricoStockDetalle> {
  build(atrib: AtribHistoricoStockDetalle): DocHistoricoStockDetalle;
}

const schemaHistoricoStockDetalle = new mongoose.Schema(
  {
    stockId: {
      type: String,
      required: true,
    },
    productoId: {
      type: String,
      required: true,
    },
    nombreProducto: {
      type: String,
      required: true,
    },
    cantidad: {
      type: Number,
      required: true,
    },
    tipoProducto: {
      type: String,
      required: true,
    },
    tipoPrecio: {
      type: String,
      required: true,
    },
    managerPrecioId: {
      type: String,
      required: true,
    },
    descripcionPrecio: {
      type: String,
      required: true,
    },
    literalUnidadMedida: {
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
    precioProducto: {
      type: Number,
      required: true,
    },
    sumatoriaPrecioProducto: {
      type: Number,
      required: true,
    },
    fechaUltimaConversion: {
      type: mongoose.Schema.Types.Date,
      default: Date.now,
    },
    usuarioUltimaCompra: {
      type: String,
      required: true,
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

schemaHistoricoStockDetalle.statics.build = (atrib: AtribHistoricoStockDetalle) => {
  return new HistoricoStockDetalle({
    _id: atrib.id,
    stockId: atrib.stockId,
    productoId: atrib.productoId,
    nombreProducto: atrib.nombreProducto,
    cantidad: atrib.cantidad,
    tipoProducto: atrib.tipoProducto,
    tipoPrecio: atrib.tipoPrecio,
    managerPrecioId: atrib.managerPrecioId,
    descripcionPrecio: atrib.descripcionPrecio,
    literalUnidadMedida: atrib.literalUnidadMedida,
    literalMedidaProducto: atrib.literalMedidaProducto,
    colorId: atrib.colorId,
    precioProducto: atrib.precioProducto,
    sumatoriaPrecioProducto: atrib.sumatoriaPrecioProducto,
    fechaUltimaConversion: atrib.fechaUltimaConversion,
    usuarioUltimaCompra: atrib.usuarioUltimaCompra,
  });
};

const HistoricoStockDetalle = mongoose.model<DocHistoricoStockDetalle, ModelHistoricoStockDetalle>(
  'HistoricoStockDetalle',
  schemaHistoricoStockDetalle
);

export { HistoricoStockDetalle };
