const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  placeName: { type: String },
  placePrice: { type: String },
  placeImage: { type: String },
  days: { type: String },
  id: { type: String },
  hotelName: { type: String },
  hotelPrice: { type: String },
  hotelImage: { type: String },
  hotelRating: { type: String },
  hotelDays: { type: String },
  flightName: { type: String },
  flightPrice: { type: String },
  flightImage: { type: String },
  departureTime: { type: String },
  landingTime: { type: String },
  formName: { type: String },
  formAge: { type: String },
  formGender: { type: String },
  married: { type: String },
  formAddress: { type: String },
  aadharCard: { type: String },
  numTickets: { type: String },
});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = { bookingModel };
