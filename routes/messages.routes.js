const { Router } = require("express");

const messagesRouter = Router();

messagesRouter.get("/", (req, res) => {
  res.send("messages data");
});

messagesRouter.delete("/delete/:messageId", (req, res) => {
  res.send("Delete messages data");
});

module.exports = { messagesRouter };
