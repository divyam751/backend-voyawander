const { Router } = require("express");
const { messageModel } = require("../models/message.model");

const messagesRouter = Router();

messagesRouter.get("/", async (req, res) => {
  const message = await messageModel.find();
  res.status(200).send(message);
});

messagesRouter.post("/create", async (req, res) => {
  const { mobile, email, message } = req.body;
  const new_message = new messageModel({
    mobile,
    email,
    message,
  });
  await new_message.save();
  res.status(200).send({ msg: "Message sent successful", status: 200 });
});

messagesRouter.delete("/delete/:messageId", async (req, res) => {
  const messageId = req.params.messageId;

  try {
    const deletedmessage = await messageModel.findByIdAndDelete(messageId);

    if (!deletedmessage) {
      return res.status(404).send({ msg: `messages ${messageId} not found` });
    }

    res.status(200).send({
      msg: `messages ${messageId} deleted`,
    });
  } catch (error) {
    console.error("Error deleting message:", error);
    res
      .status(500)
      .send({ msg: "An error occurred while deleting the message" });
  }
});

module.exports = { messagesRouter };
