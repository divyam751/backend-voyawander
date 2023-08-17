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
const { placeRouter } = require("./routes/places.routes");

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
  const { name, email, password } = req.body;

  bcrypt.hash(password, 3, async function (err, hash) {
    const new_user = new UserModel({
      name,
      email,
      password: hash,
    });

    try {
      await new_user.save();
      res.status(200).send({ msg: "Signup successfully", status: 200 });
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
    res
      .status(404)
      .send({ msg: "User not found , please signup first", status: 404 });
  } else {
    const hashed_password = user.password;
    bcrypt.compare(password, hashed_password, function (err, result) {
      if (result) {
        let token = jwt.sign({ user_id: user._id }, process.env.SECRET_KEY);
        res
          .status(200)
          .send({ msg: "Login successful", token: token, status: 200 });
      } else {
        res
          .status(401)
          .send({ msg: " Login failed, invalid credentials", status: 401 });
      }
    });
  }
});

// Other API Routes
app.use("/destinations", destinationRouter);
app.use("/places", placeRouter);
app.use("/hotels", hotelsRouter);
app.use("/flights", flightsRouter);
app.use("/booking", bookingRouter);
app.use("/messages", authentication, messagesRouter);

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
