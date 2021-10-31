import mongoose from 'mongoose';

export interface AtribStockDetalle {
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

export interface DocStockDetalle extends mongoose.Document {
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

interface ModelStockDetalle extends mongoose.Model<DocStockDetalle> {
  build(atrib: AtribStockDetalle): DocStockDetalle;
}

const schemaStockDetalle = new mongoose.Schema(
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

schemaStockDetalle.statics.build = (atrib: AtribStockDetalle) => {
  return new StockDetalle(atrib);
};

const StockDetalle = mongoose.model<DocStockDetalle, ModelStockDetalle>(
  'StockDetalle',
  schemaStockDetalle
);

export { StockDetalle };
