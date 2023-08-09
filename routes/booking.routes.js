const { Router } = require("express");

const bookingRouter = Router();

bookingRouter.get("/", async (req, res) => {
  const bookings = await bookingModel.find();
  res.status(200).send(bookings);
});
bookingRouter.post("/create", async (req, res) => {
  const {
    placeName,
    placePrice,
    placeImage,
    days,
    id,
    hotelName,
    hotelPrice,
    hotelImage,
    hotelRating,
    hotelDays,
    flightName,
    flightPrice,
    flightImage,
    departureTime,
    landingTime,
    formName,
    formAge,
    formGender,
    married,
    formAddress,
    aadharCard,
    numTickets,
  } = req.body;
  const new_booking = new bookingModel({
    placeName,
    placePrice,
    placeImage,
    days,
    id,
    hotelName,
    hotelPrice,
    hotelImage,
    hotelRating,
    hotelDays,
    flightName,
    flightPrice,
    flightImage,
    departureTime,
    landingTime,
    formName,
    formAge,
    formGender,
    married,
    formAddress,
    aadharCard,
    numTickets,
  });
  await new_booking.save();
  res.status(200).send("New booking added");
});

module.exports = { bookingRouter };
