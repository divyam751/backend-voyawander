const { Router } = require("express");
const { flightModel } = require("../models/Flight.model");
const flightsRouter = Router();

flightsRouter.get("/", async (req, res) => {
  const flight = await flightModel.find();
  res.status(200).send(flight);
});

flightsRouter.post("/create", async (req, res) => {
  const { image, flightName, departureTime, landingTime, totalTime, price } =
    req.body;
  const new_flight = new flightModel({
    image,
    flightName,
    departureTime,
    landingTime,
    totalTime,
    price,
  });
  await new_flight.save();
  res.status(200).send("New flight added");
});

flightsRouter.put("/edit/:flightId", async (req, res) => {
  const flightId = req.params.flightId;
  const payload = req.body;

  try {
    const updatedFlight = await flightModel.findByIdAndUpdate(
      flightId,
      payload
    );

    if (!updatedFlight) {
      return res.status(404).send({ msg: `flight ${flightId} not found` });
    }

    res.status(200).send({ msg: `flight ${flightId} updated` });
  } catch (error) {
    console.error("Error updating flight:", error);
    res
      .status(500)
      .send({ msg: "An error occurred while updating the flight" });
  }
});

flightsRouter.delete("/delete/:flightId", async (req, res) => {
  const flightId = req.params.flightId;

  try {
    const deletedflight = await flightModel.findByIdAndDelete(flightId);

    if (!deletedflight) {
      return res.status(404).send({ msg: `flight ${flightId} not found` });
    }

    res.status(200).send({
      msg: `flight ${flightId} deleted`,
    });
  } catch (error) {
    console.error("Error deleting flight:", error);
    res
      .status(500)
      .send({ msg: "An error occurred while deleting the flight" });
  }
});

module.exports = { flightsRouter };
