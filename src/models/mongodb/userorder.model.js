const mongoose = require('mongoose');

const userorderSchema = mongoose.model(
  "user_orders",
  new mongoose.Schema({
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    },
    orderdate : {
      type: Date,
      required:true
     },
    orderList : [{
      product_id : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product_master"
      },
      product_qty : Number,
      product_price : Number,
    }],
    createdAt: Date,
    updatedAt : Date
  })
);

module.exports = userorderSchema;