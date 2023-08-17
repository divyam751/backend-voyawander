const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  ArrivalTime: { type: String },
  DepartureDestination: { type: String },
  DepartureTime: { type: String },
  FlightLogo: { type: String },
  FlightName: { type: String },
  FlightNumber: { type: String },
  FlightPrice: { type: Number },
  HotelDescription: { type: String },
  HotelImage: { type: String },
  HotelLocation: { type: String },
  HotelName: { type: String },
  HotelPrice: { type: Number },
  HotelRating: { type: String },
  HotelStars: { type: Number },
  HotelTax: { type: Number },
  ReviewRating: { type: Number },
  TotalTime: { type: String },
  address: { type: String },
  adharNumber: { type: String },
  bookingAge: { type: Number },
  bookingGender: { type: String },
  bookingName: { type: String },
  imageURL: { type: String },
  numTickets: { type: Number },
  placeName: { type: String },
  price: { type: Number },
  tripDuration: { type: String },
});

const bookingModel = mongoose.model("booking", bookingSchema);

module.exports = { bookingModel };
