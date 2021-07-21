const Review = require("../models/Review");
const User = require("../models/User");
const verifyToken = require("../middleware/verifyToken");

const getReviews = async (req, res) => {
	const reviews = await Review.find({ movieId: req.params.id });
	res.send(reviews);

};

const getReview = async (req, res) => {
	const review = await Review.findOne({ movieId: req.params.id });
	res.send(review);
};

// ez??
const getRatings = async (req, res) => {
  const { movieId } = req.query.movie;
};

// + verifyToken
const postReview = async (req, res) => {
	console.log(req.body)
	const { movieId } = req.body;
	const { userId } = req.token.sub;
	const { review } = req.body;
	const { rating } = req.body;

	const newReview = await new Review({
		movieId,
		userId,
		review,
		rating
	}).save();

	if (newReview)
		res.status(201).json({ message: "review has been added" });

};

module.exports = { getReviews, getReview, getRatings, postReview };
