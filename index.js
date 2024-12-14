const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/authRoute"); // Import authRouter correctly
const { registerController } = require("./controllers/registerController");

// Our PORT
const PORT = process.env.PORT || 3000;

// Our dotenv config
dotenv.config();

// Our DB connection
const db = require("./db/conn"); // Ensure your db connection setup is correct

// Our Rest object
const app = express();

// Our Middlewares
app.use(express.json()); // To parse JSON bodies

// Our Routes
app.use("/api/v1/auth", authRouter);

app.post("/api/v1/register", registerController);

//  Our Rest API
app.get("/", (req, res) => {
  res.send({ message: "Welcome to Ecommerce App" });
});

// Listening on port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
