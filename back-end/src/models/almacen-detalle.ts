import mongoose from 'mongoose';

export interface AtribAlmacenDetalle {
  almacenId: string;
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
  fechaUltimaCompra: Date;
  usuarioUltimaCompra: string;
}

export interface DocAlmacenDetalle extends mongoose.Document {
  almacenId: string;
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
  fechaUltimaCompra: Date;
  usuarioUltimaCompra: string;
}

interface ModelAlmacenDetalle extends mongoose.Model<DocAlmacenDetalle> {
  build(atrib: AtribAlmacenDetalle): DocAlmacenDetalle;
}

const schemaAlmacenDetalle = new mongoose.Schema(
  {
    almacenId: {
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
    fechaUltimaCompra: {
      type: Date,
      required: true,
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

schemaAlmacenDetalle.statics.build = (atrib: AtribAlmacenDetalle) => {
  return new AlmacenDetalle(atrib);
};

const AlmacenDetalle = mongoose.model<DocAlmacenDetalle, ModelAlmacenDetalle>(
  'AlmacenDetalle',
  schemaAlmacenDetalle
);

export { AlmacenDetalle };
