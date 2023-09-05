const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema({
  cardNumber: { type: Number },
  ExpirationDate: { type: String },
  CVV: { type: Number },
  Name: { type: String },
});

const paymentModel = mongoose.model("payment", paymentSchema);

module.exports = { paymentModel };
