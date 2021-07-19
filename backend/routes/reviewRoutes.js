const express = require("express");
const router = express.Router({ mergeParams: true });
const reviewController = require("../controllers/reviewController");

// -- csak review posthoz kell majd --
// const verifyToken = require("../middleware/verifyToken");
// router.use(verifyToken); 

router.get("/", reviewController.getReviews);
router.get("/:id", reviewController.getReview);
router.get("/rating", reviewController.getRatings);  // ??

router.post("/", reviewController.postReview);


module.exports = router;