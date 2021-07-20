const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
	movieId: { type: Number, required: true },
	userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
	review: { type: String },
	rating: { type: Number, required: true },
	date: { type: Date, default: Date.now() }
});

module.exports = mongoose.model("Review", reviewSchema);