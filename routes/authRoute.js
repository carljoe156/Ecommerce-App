// routes/authRoute.js
const express = require("express");
const router = express.Router();
const { registerController } = require("../controllers/registerController"); // You can also directly import here

// Example of an authentication route
router.post("/register", registerController);

module.exports = router;
