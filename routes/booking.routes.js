const { Router } = require("express");

const bookingRouter = Router();

bookingRouter.get("/", (req, res) => {
  res.send("booked data");
});
bookingRouter.post("/create", (req, res) => {
  res.send("New Booking data");
});

module.exports = { bookingRouter };
