const { Router } = require("express");
const { hotelModel } = require("../models/hotel.model");
const hotelsRouter = Router();

hotelsRouter.get("/", async (req, res) => {
  const hotels = await hotelModel.find();
  res.status(200).send(hotels);
});

hotelsRouter.post("/create", async (req, res) => {
  const {
    HotelImage,
    HotelStars,
    HotelRating,
    ReviewRating,
    HotelName,
    HotelLocation,
    HotelDescription,
    HotelPrice,
    HotelTax,
  } = req.body;
  const new_hotels = new hotelModel({
    HotelImage,
    HotelStars,
    HotelRating,
    ReviewRating,
    HotelName,
    HotelLocation,
    HotelDescription,
    HotelPrice,
    HotelTax,
  });
  await new_hotels.save();
  res.status(200).send("New hotel added");
});

hotelsRouter.put("/edit/:hotelId", async (req, res) => {
  const hotelId = req.params.hotelId;
  const payload = req.body;

  try {
    const updatedhotels = await hotelModel.findByIdAndUpdate(hotelId, payload);

    if (!updatedhotels) {
      return res.status(404).send({ msg: `hotels ${hotelId} not found` });
    }

    res.status(200).send({ msg: `hotels ${hotelId} updated` });
  } catch (error) {
    console.error("Error updating hotels:", error);
    res.status(500).send({ msg: "An error occurred while updating the hotel" });
  }
});

hotelsRouter.delete("/delete/:hotelId", async (req, res) => {
  const hotelId = req.params.hotelId;

  try {
    const deletedhotel = await hotelModel.findByIdAndDelete(hotelId);

    if (!deletedhotel) {
      return res.status(404).send({ msg: `hotels ${hotelId} not found` });
    }

    res.status(200).send({
      msg: `hotels ${hotelId} deleted`,
    });
  } catch (error) {
    console.error("Error deleting hotel:", error);
    res.status(500).send({ msg: "An error occurred while deleting the hotel" });
  }
});

module.exports = { hotelsRouter };
