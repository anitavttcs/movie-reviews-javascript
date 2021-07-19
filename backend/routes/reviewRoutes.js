const express = require("express");
const router = express.Router({ mergeParams: true });
const reviewController = require("../controllers/reviewController");

// -- csak review posthoz kell majd --
// const verifyToken = require("../middleware/verifyToken");
// router.use(verifyToken); 


module.exports = router;