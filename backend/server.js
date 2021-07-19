const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const connectDB = require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		origin: "http://localhost:3000",
		credentials: true,
	})
);

// Database
connectDB();

// Middleware
app.use(require("./middleware/errorHandler"));

// Routes


// Server
app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
});
