const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    sizes: [
      {
        size: {
          type: String,
          enum: ['S', 'M', 'L'],
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Product', productSchema);
