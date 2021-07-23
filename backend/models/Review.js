const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  movieId: { type: Number, required: true },
  userId: { type: String, required: true },
  username: { type: String, required: true },
  review: { type: String },
  rating: { type: Number, required: true },
  date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("Review", reviewSchema);
