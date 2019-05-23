const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  date: { type: Number, required: true },
  amount: { type: Number, required: true },
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'Donor' },
});

module.exports = mongoose.model('Donation', donationSchema);
