const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  HotelImage: { type: String, require: true },
  HotelStars: { type: Number, require: true },
  HotelRating: { type: String, require: true },
  ReviewRating: { type: Number, require: true },
  HotelName: { type: String, require: true },
  HotelLocation: { type: String, require: true },
  HotelDescription: { type: String, require: true },
  HotelPrice: { type: Number, require: true },
  HotelTax: { type: Number, require: true },
});

const hotelModel = mongoose.model("hotel", hotelSchema);

module.exports = { hotelModel };
