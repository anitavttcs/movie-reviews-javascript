const express = require("express");
const router = express.Router({ mergeParams: true });
const authController = require("../controllers/authController");

router.post("/", authController.loginCheck);

module.exports = router;