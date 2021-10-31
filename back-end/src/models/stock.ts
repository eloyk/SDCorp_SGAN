import mongoose from 'mongoose';

export interface AtribStock {
  descripcion: string;
  tiendaId: string;
  establecimientoId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

export interface DocStock extends mongoose.Document {
  descripcion: string;
  tiendaId: string;
  establecimientoId: string;
  usuarioIdAlta?: string;
  emailUsuarioAlta?: string;
  fechaAlta?: Date;
}

interface ModelStock extends mongoose.Model<DocStock> {
  build(atrib: AtribStock): DocStock;
}

const schemaStock = new mongoose.Schema(
  {
    descripcion: {
      type: String,
      required: true,
      lowercase: true,
      unique: true
    },
    tiendaId: {
      type: String,
      required: true,
    },
    establecimientoId: {
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
        delete ret.__v;
      },
    },
  }
);

schemaStock.statics.build = (atrib: AtribStock) => {
  return new Stock(atrib);
};

const Stock = mongoose.model<DocStock, ModelStock>(
  'Stock',
  schemaStock
);

export { Stock };
