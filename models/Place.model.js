const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
  imageURL: { type: String, require: true },
  placeName: { type: String, require: true },
  tripDuration: { type: String, require: true },
  price: { type: Number, require: true },
});

const placeModel = mongoose.model("place", placeSchema);

module.exports = { placeModel };
