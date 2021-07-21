const jwt = require("jsonwebtoken");
const authService = require("../services/authService");
const fetch = require("node-fetch");
require("dotenv/config");


const secret = process.env.SECRET;
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

async function loginCheck(req, res) {
	const code = req.body.code;

	fetch("https://accounts.google.com/.well-known/openid-configuration") //opc.
		.then((res) => res.json())
		.then((data) => {
			const fetchOptions = {
				method: "POST",
				headers: {
					"Content-type": "application/x-www-form-urlencoded",
				},
				body: new URLSearchParams({
					code: code,
					client_id: clientId,
					client_secret: clientSecret,
					redirect_uri: "http://localhost:3000/login",
					grant_type: "authorization_code",
				})
			};

			fetch(data.token_endpoint, fetchOptions)
				.then((res) => res.json())
				.then((data) => {
					// console.log(data.id_token);
					userCheck(data, res);
				})
				.catch((err) =>
					res.status(403).json({ msg: "Authentication failed." })
				);
		});

};

async function userCheck(data, res) {
	const { sub, name, email } = jwt.decode(data.id_token);

	// const decoded = jwt.verify(data.id_token, process.env.SECRET);


	const foundUser = await authService.getUser(email);
	if (!foundUser) {
		const newUser = {
			name: name,
			email: email,
			sub: sub
		};
		console.log(newUser);
		await authService.addUser(newUser);
	}

	jwt.sign(
		{
			sub: sub,
			name: name,
			email: email
		},
		secret,
		// { expiresIn: "1h" },
		function (err, token) {
			res.json({ token: token });
		}
	);
}

module.exports = { loginCheck, secret };
