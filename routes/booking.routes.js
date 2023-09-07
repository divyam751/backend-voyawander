const { Router } = require("express");
const { bookingModel } = require("../models/booking.model");
const bookingRouter = Router();

bookingRouter.get("/", async (req, res) => {
  const bookings = await bookingModel.find();
  res.status(200).send(bookings);
});
bookingRouter.post("/create", async (req, res) => {
  const {
    ArrivalTime,
    DepartureDestination,
    DepartureTime,
    FlightLogo,
    FlightName,
    FlightNumber,
    FlightPrice,
    HotelDescription,
    HotelImage,
    HotelLocation,
    HotelName,
    HotelPrice,
    HotelRating,
    HotelStars,
    HotelTax,
    ReviewRating,
    TotalTime,
    address,
    adharNumber,
    bookingAge,
    bookingGender,
    bookingName,
    imageURL,
    numTickets,
    placeName,
    price,
    tripDuration,
  } = req.body;
  const new_booking = new bookingModel({
    ArrivalTime,
    DepartureDestination,
    DepartureTime,
    FlightLogo,
    FlightName,
    FlightNumber,
    FlightPrice,
    HotelDescription,
    HotelImage,
    HotelLocation,
    HotelName,
    HotelPrice,
    HotelRating,
    HotelStars,
    HotelTax,
    ReviewRating,
    TotalTime,
    address,
    adharNumber,
    bookingAge,
    bookingGender,
    bookingName,
    imageURL,
    numTickets,
    placeName,
    price,
    tripDuration,
  });
  await new_booking.save();
  res.status(200).send({ msg: "New booking added", status: 200 });
});

module.exports = { bookingRouter };
