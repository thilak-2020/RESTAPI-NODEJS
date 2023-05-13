const mongoose = require('mongoose');

const productSchema = mongoose.model(
  "product_masters",
  new mongoose.Schema({
    product_name: {
      type: String,
    },
    category_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "category_master"
      }
  })
);

module.exports = productSchema;