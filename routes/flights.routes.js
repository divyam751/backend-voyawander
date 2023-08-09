const { Router } = require("express");

const flightsRouter = Router();

flightsRouter.get("/", (req, res) => {
  res.send("Flights data");
});
flightsRouter.post("/create", (req, res) => {
  res.send("New Flights data");
});
flightsRouter.put("/edit/:flightId", (req, res) => {
  res.send("Edit Flights data");
});
flightsRouter.delete("/delete/:flightId", (req, res) => {
  res.send("Delete Flights data");
});

module.exports = { flightsRouter };
