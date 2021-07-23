const express = require("express");
const router = express.Router({ mergeParams: true });
const reviewController = require("../controllers/reviewController");

// -- csak review posthoz kell majd --
const verifyToken = require("../middleware/verifyToken");

router.get("/", reviewController.getReviews);
router.get("/:id", reviewController.getReview);

router.post("/", [verifyToken, reviewController.postReview]);

router.get("/test", (req, res) => {
  res.send(req.query);
});

module.exports = router;
