const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cors = require("cors");

const { connection } = require("./config/db");
const { UserModel } = require("./models/User.model.js");
const { destinationRouter } = require("./routes/destinations.routes.js");
const { hotelsRouter } = require("./routes/hotels.routes.js");
const { flightsRouter } = require("./routes/flights.routes.js");
const { messagesRouter } = require("./routes/messages.routes.js");
const { bookingRouter } = require("./routes/booking.routes.js");
const { authentication } = require("./middleware/authentication");

const app = express();

//Middlewares

app.use(express.json());

app.use(
  cors({
    origin: "*",
  })
);

app.get("/", (req, res) => {
  res.send("Home Page");
});

// Signup and Login Routes
app.post("/signup", async (req, res) => {
  const { name, email, password, age, phone_number } = req.body;

  bcrypt.hash(password, 3, async function (err, hash) {
    const new_user = new UserModel({
      name,
      email,
      password: hash,
      age,
      phone_number,
    });

    try {
      await new_user.save();
      res.status(200).send({ msg: "Signup successfully" });
    } catch (err) {
      console.log("Error while storing data in db");
      console.log(err);
      res
        .status(500)
        .send({ msg: "Something went wrong please try again later" });
    }
  });
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });
  if (!user) {
    res.status(404).send({ msg: "User not found , please signup first" });
  } else {
    const hashed_password = user.password;
    bcrypt.compare(password, hashed_password, function (err, result) {
      if (result) {
        let token = jwt.sign({ user_id: user._id }, process.env.SECRET_KEY);
        res.status(200).send({ msg: "Login successful", token: token });
      } else {
        res.status(401).send({ msg: " Login failed, invalid credentials" });
      }
    });
  }
});

// Other API Routes
app.use("/destinations", destinationRouter);
app.use("/hotels", hotelsRouter);
app.use("/flights", flightsRouter);
app.use("/messages", authentication, messagesRouter);
app.use("/booking", authentication, bookingRouter);

//Server PORT
app.listen(8000, async () => {
  try {
    await connection;
    console.log("connected to db successfully");
  } catch (err) {
    console.log("Error while connecting to database ");
    console.log(err);
  }
  console.log("App listning on port 8000 ");
});
