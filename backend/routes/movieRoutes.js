const express = require("express");
const router = express.Router({ mergeParams: true });
const movieController = require("../controllers/movieController");


router.get("/", movieController.getMovies);
router.get("/page:number", movieController.getMovies);
router.get("/:id", movieController.getMovie);


module.exports = router;