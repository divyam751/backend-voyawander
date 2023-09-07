const { Router } = require("express");
const { placeModel } = require("../models/place.model");

const placeRouter = Router();

placeRouter.get("/", async (req, res) => {
  const { search } = req.query;

  try {
    let query = {};

    if (search) {
      const searchRegex = new RegExp(search, "i");
      query = { placeName: searchRegex };
    }

    const places = await placeModel.find(query);
    res.status(200).send(places);
  } catch (error) {
    console.error("Error fetching places:", error);
    res.status(500).send({ msg: "An error occurred while fetching places" });
  }
});

placeRouter.post("/create", async (req, res) => {
  const { imageURL, placeName, tripDuration, price } = req.body;
  const new_place = new placeModel({
    imageURL,
    placeName,
    tripDuration,
    price,
  });
  await new_place.save();
  res.status(200).send("New places added");
});

placeRouter.put("/edit/:placeId", async (req, res) => {
  const placeId = req.params.placeId;
  const payload = req.body;

  try {
    const updatedplace = await placeModel.findByIdAndUpdate(placeId, payload);

    if (!updatedplace) {
      return res.status(404).send({ msg: `place ${placeId} not found` });
    }

    res.status(200).send({ msg: `place ${placeId} updated` });
  } catch (error) {
    console.error("Error updating place:", error);
    res.status(500).send({ msg: "An error occurred while updating the place" });
  }
});

placeRouter.delete("/delete/:placeId", async (req, res) => {
  const placeId = req.params.placeId;

  try {
    const deletedplace = await placeModel.findByIdAndDelete(placeId);

    if (!deletedplace) {
      return res.status(404).send({ msg: `place ${placeId} not found` });
    }

    res.status(200).send({
      msg: `place ${placeId} deleted`,
    });
  } catch (error) {
    console.error("Error deleting place:", error);
    res.status(500).send({ msg: "An error occurred while deleting the place" });
  }
});

module.exports = { placeRouter };
