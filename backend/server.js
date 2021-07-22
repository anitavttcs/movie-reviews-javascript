const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.FRONTEND_HOST,
    credentials: true,
  })
);

// Test
app.get("/test", (req, res) => {
  res.status(200).json({ message: "ok" });
});

// Routes
app.use("/api/login", require("./routes/authRoutes"));
app.use("/api/movies", require("./routes/movieRoutes"));
app.use("/api/review", require("./routes/reviewRoutes"));

// Middleware
app.use(require("./middleware/errorHandler"));

module.exports = app;
