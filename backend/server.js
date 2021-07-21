const express = require("express");
const app = express();
const cors = require("cors");
// const port = process.env.PORT || 5000;
// const connectDB = require("./config/database");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

// Database
// connectDB();

// Test
app.get("/test", (req, res) => {
  res.status(200).json({ "message": "ok" });
});

// Routes
app.use("/api/login", require("./routes/authRoutes"));
app.use("/api/movies", require("./routes/movieRoutes"));
app.use("/api/review", require("./routes/reviewRoutes"));

// Middleware
app.use(require("./middleware/errorHandler"));

// Server
// app.listen(port, () => {
//   console.log(`Listening at http://localhost:${port}`);
// });

module.exports = app;