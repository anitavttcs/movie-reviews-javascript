module.exports = (err, req, res, next) => {
	res.status(500).json({ message: "Server error" });
	console.log("Server error: ", err);
	next();
};