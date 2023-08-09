const mongoose = require("mongoose");

const destinationSchema = new mongoose.Schema({
  name: { type: String, require: true },
  price: { type: String, require: true },
  image: { type: String, require: true },
  days: { type: Number, require: true },
});

const destinationModel = mongoose.model("destination", destinationSchema);

module.exports = { destinationModel };
