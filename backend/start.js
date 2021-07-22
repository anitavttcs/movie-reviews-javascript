require("dotenv/config");
const app = require("./server");
const port = 5000;
const connectDB = require("./config/database");

connectDB();

app.listen(port, () => {
	console.log(`Listening at ${port}`)
});