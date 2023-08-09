const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  room_price: { type: Number, require: true },
  rating: { type: Number, require: true },
  facilities: { type: [String], require: true },
  address: { type: String, require: true },
});

const hotelModel = mongoose.model("hotel", hotelSchema);

module.exports = { hotelModel };
