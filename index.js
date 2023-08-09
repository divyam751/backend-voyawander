const express = require("express");

const { connection } = require("./config/db");
const { UserModel } = require("./models/User.model");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Page");
});

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

    res.send({ msg: "signup Successful" });
  });
});

app.post("./login");

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
