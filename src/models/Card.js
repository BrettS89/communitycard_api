const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  cardNumber: { type: String, required: true },
  activationDate: { type: Number, required: true },
  cancelled: { type: Boolean, default: false },
});

module.exports = mongoose.model('Card', cardSchema);
