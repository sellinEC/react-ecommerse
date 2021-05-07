const mongodb = require('mongoose');

const orderSchema = mongodb.Schema({

  userId: { type: String, required: true },
  products: { type: Array, required: true },
  // totalPrice: { type: Number, required: true },
  shipped: {type: Boolean, default: false},
  
  
  created: { type: Date, default: Date.now },
  modified: { type: Date, default: Date.now }

}) 

module.exports = mongodb.model('Order', orderSchema);