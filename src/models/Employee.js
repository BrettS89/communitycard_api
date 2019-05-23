const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  active: { type: Boolean, required: true },
  dateAdded: { type: Number, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
});

module.exports = mongoose.model('Employee', employeeSchema);
