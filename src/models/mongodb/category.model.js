const mongoose = require('mongoose');

const categorySchema = mongoose.model(
  "category_masters",
  new mongoose.Schema({
    category_name: {
      type: String,
    }
  })
);

module.exports = categorySchema;