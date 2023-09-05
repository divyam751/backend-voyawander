const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  FlightLogo: { type: String, require: true },
  FlightName: { type: String, require: true },
  FlightNumber: { type: String, require: true },
  DepartureTime: { type: String, require: true },
  DepartureDestination: { type: String, require: true },
  ArrivalTime: { type: String, require: true },
  TotalTime: { type: String, require: true },
  FlightPrice: { type: Number, require: true },
});

const flightModel = mongoose.model("flight", flightSchema);

module.exports = { flightModel };
