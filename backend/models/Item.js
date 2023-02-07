const { model, Schema } = require('mongoose');

const Item = new Schema({
  name: String,
  price: Number,
  thumbnail: String,
});

module.exports = model('Item', Item, 'store-items');
