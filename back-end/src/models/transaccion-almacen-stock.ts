import mongoose from 'mongoose';

interface AtribTransaccionAlmacenStock {
  productoId: string;
  producto: string;
  tipoProducto: string;
  literalUnidadMedida: string;
  literalMedidaProducto: string;
  color?: string;
  precioCompra: number;
  precioVenta: number;
  cantidadProducto: number;
  sumatoriaPrecioCompra?: number;
  sumatoriaPrecioVenta?: number;
  almacenId: string;
  stockId: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocTransaccionAlmacenStock extends mongoose.Document {
  productoId: string;
  producto: string;
  tipoProducto: string;
  literalUnidadMedida: string;
  literalMedidaProducto: string;
  color?: string;
  precioCompra: number;
  precioVenta: number;
  cantidadProducto: number;
  sumatoriaPrecioCompra?: number;
  sumatoriaPrecioVenta?: number;
  almacenId: string;
  stockId: string;
  tiendaId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelTransaccionAlmacenStock extends mongoose.Model<DocTransaccionAlmacenStock> {
  build(atrib: AtribTransaccionAlmacenStock): DocTransaccionAlmacenStock;
}

const schemaTransaccionAlmacenStock = new mongoose.Schema(
  {
    productoId: {
      type: String,
      required: true,
    },
    producto: {
      type: String,
      required: true,
    },
    tipoProducto: {
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
    color: {
      type: String,
    },
    precioCompra: {
      type: Number,
      required: true,
    },
    precioVenta: {
      type: Number,
      required: true,
    },
    cantidadProducto: {
      type: Number,
      required: true,
    },
    sumatoriaPrecioCompra: {
      type: Number,
      required: true,
      default: 0,
    },
    sumatoriaPrecioVenta: {
      type: Number,
      required: true,
      default: 0,
    },
    tiendaId: {
      type: String,
      required: true,
    },
    almacenId: {
      type: String,
      required: true,
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

schemaTransaccionAlmacenStock.statics.build = (atrib: AtribTransaccionAlmacenStock) => {
  return new TransaccionAlmacenStock(atrib);
};

const TransaccionAlmacenStock = mongoose.model<DocTransaccionAlmacenStock, ModelTransaccionAlmacenStock>(
  'TransaccionAlmacenStock',
  schemaTransaccionAlmacenStock
);

export { TransaccionAlmacenStock };
