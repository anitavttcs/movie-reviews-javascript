const Review = require("../models/Review");

const getReviews = async (req, res) => {
  const reviews = await Review.find({}).populate("userId").exec();
  res.send(reviews);
};

const getReview = async (req, res) => {
  const review = await Review.find({ movieId: req.params.id })
    .populate("userId")
    .exec();
  res.send(review);
};

const postReview = async (req, res) => {
  console.log(req.body);
  const { movieId } = req.body;
  const { review } = req.body;
  const { rating } = req.body;

  const { sub } = req.token;

  const newReview = await new Review({
    movieId,
    userId: sub,
    review,
    rating,
  }).save();

  if (newReview) res.status(201).json({ message: "review has been added" });
};

module.exports = { getReviews, getReview, postReview };
