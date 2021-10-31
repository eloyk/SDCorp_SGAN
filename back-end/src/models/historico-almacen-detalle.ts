import mongoose from 'mongoose';

export interface AtribHistoricoAlmacenDetalle {
  id: string;
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

export interface DocHistoricoAlmacenDetalle extends mongoose.Document {
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

interface ModelHistoricoAlmacenDetalle extends mongoose.Model<DocHistoricoAlmacenDetalle> {
  build(atrib: AtribHistoricoAlmacenDetalle): DocHistoricoAlmacenDetalle;
}

const schemaHistoricoAlmacenDetalle = new mongoose.Schema(
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

schemaHistoricoAlmacenDetalle.statics.build = (atrib: AtribHistoricoAlmacenDetalle) => {
  return new HistoricoAlmacenDetalle({
    _id: atrib.id,
    almacenId: atrib.almacenId,
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
    fechaUltimaCompra: atrib.fechaUltimaCompra,
    usuarioUltimaCompra: atrib.usuarioUltimaCompra,
  });
};

const HistoricoAlmacenDetalle = mongoose.model<DocHistoricoAlmacenDetalle, ModelHistoricoAlmacenDetalle>(
  'HistoricoAlmacenDetalle',
  schemaHistoricoAlmacenDetalle
);

export { HistoricoAlmacenDetalle };
