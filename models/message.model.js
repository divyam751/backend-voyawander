const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
  mobile: { type: Number, require: true },
  email: { type: String, require: true },
  message: { type: String, require: true },
});

const messageModel = mongoose.model("message", messageSchema);

module.exports = { messageModel };
