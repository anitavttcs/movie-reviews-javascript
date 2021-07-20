const express = require("express");
const router = express.Router({ mergeParams: true });
const movieController = require("../controllers/movieController");

router.get("/", movieController.getMovies);
router.get("/page:number", movieController.getMovies);
router.get("/id:id", movieController.getMovie);
router.get("/searchByName", movieController.searchMovie);

router.get("/test", (req, res) => {
  res.send("oka");
});

module.exports = router;
