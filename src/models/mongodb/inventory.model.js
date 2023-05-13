const mongoose = require('mongoose');

const inventorySchema = mongoose.model(
  "sm_inventory_masters", new mongoose.Schema({
    product_name: {
      type: String,
      required: true,
    },
    category_name : {
      type: String,
      required: true,
    },
    qty: {
      type: Number,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    createdAt: Date,
    updatedAt : Date
  })
);

module.exports = inventorySchema;