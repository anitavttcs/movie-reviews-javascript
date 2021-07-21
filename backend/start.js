const app = require("./server");
const connectDB = require("./config/database");
const port = 5000;

connectDB();

app.listen(port, () => {
	console.log(`Listening at http://localhost:${port}`)
});