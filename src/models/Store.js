const mongoose = require('mongoose');

const storeSchema = new mongoose.Schema({
  dateAdded: { type: Number, required: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model('Store', storeSchema);
