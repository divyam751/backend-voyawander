const { Router } = require("express");
const { destinationModel } = require("../models/destination.model");

const destinationRouter = Router();

destinationRouter.get("/", async (req, res) => {
  const { search } = req.query;

  try {
    let query = {};

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query = { name: searchRegex };
    }

    const destinations = await destinationModel.find(query);
    res.status(200).send(destinations);
  } catch (error) {
    console.error("Error fetching destinations:", error);
    res
      .status(500)
      .send({ msg: "An error occurred while fetching destinations" });
  }
});

destinationRouter.post("/create", async (req, res) => {
  const { name, price, image, days } = req.body;
  const new_destination = new destinationModel({
    name,
    price,
    image,
    days,
  });
  await new_destination.save();
  res.status(200).send("New Destinations added");
});

destinationRouter.put("/edit/:destinationId", async (req, res) => {
  const destinationId = req.params.destinationId;
  const payload = req.body;

  try {
    const updatedDestination = await destinationModel.findByIdAndUpdate(
      destinationId,
      payload,
    );

    if (!updatedDestination) {
      return res
        .status(404)
        .send({ msg: `Destination ${destinationId} not found` });
    }

    res.status(200).send({ msg: `Destination ${destinationId} updated` });
  } catch (error) {
    console.error("Error updating destination:", error);
    res
      .status(500)
      .send({ msg: "An error occurred while updating the destination" });
  }
});

destinationRouter.delete("/delete/:destinationId", async (req, res) => {
  const destinationId = req.params.destinationId;

  try {
    const deletedDestination = await destinationModel.findByIdAndDelete(
      destinationId,
    );

    if (!deletedDestination) {
      return res
        .status(404)
        .send({ msg: `Destination ${destinationId} not found` });
    }

    res.status(200).send({
      msg: `Destination ${destinationId} deleted`,
    });
  } catch (error) {
    console.error("Error deleting destination:", error);
    res
      .status(500)
      .send({ msg: "An error occurred while deleting the destination" });
  }
});

module.exports = { destinationRouter };
