const { Router } = require("express");
const { paymentModel } = require("../models/payment.model");
const paymentRouter = Router();

paymentRouter.post("/", async (req, res) => {
  const { cardNumber, ExpirationDate, CVV, Name } = req.body;
  const payment = new paymentModel({
    cardNumber,
    ExpirationDate,
    CVV,
    Name,
  });
  await payment.save();

  res.status(200).send({ msg: "Submitted", status: 200 });
});

module.exports = { paymentRouter };
