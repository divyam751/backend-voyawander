const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  image: { type: String, require: true },
  flightName: { type: String, require: true },
  departureTime: { type: String, require: true },
  landingTime: { type: String, require: true },
  totalTime: { type: String, require: true },
  price: { type: Number, require: true },
});

const flightModel = mongoose.model("flight", flightSchema);

module.exports = { flightModel };
