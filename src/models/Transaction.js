const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  date: { type: Number, required: true },
  amount: { type: Number, required: true },
  card: { type: mongoose.Schema.Types.ObjectId, ref: 'Card' },
  store: { type: mongoose.Schema.Types.ObjectId, ref: 'Store' },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee' },
});

module.exports = mongoose.model('Transaction', transactionSchema);
