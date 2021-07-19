const User = require("../models/User");

async function getUser(email) {
	return User.findOne({ email });
}

async function addUser(user) {
	const newUser = new User({
		name: user.name,
		email: user.email,
		sub: user.sub
	});

	await newUser.save().then(() => {
		console.log("User created: ", newUser);
	});
}

module.exports = { getUser, addUser };
