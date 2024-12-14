// controllers/registerController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs"); // Using bcrypt for password hashing

const registerController = async (req, res) => {
  try {
    const { name, email, password, phone, address } = req.body;

    // Validations
    if (!name || !email || !password || !phone || !address) {
      return res.status(400).send({
        success: false,
        message: "All fields are required",
      });
    }

    // Existing User check
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        message: "Already registered, please login",
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Register User
    const newUser = new User({
      name,
      email,
      phone,
      address,
      password: hashedPassword,
    });

    // Save User
    await newUser.save();

    res.status(200).send({
      success: true,
      message: "User registered successfully!",
      user: newUser,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).send({
      success: false,
      message: "Error in Registration",
      error: err.message,
    });
  }
};

module.exports = { registerController };
