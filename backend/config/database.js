const mongoose = require("mongoose");

const { DB_CONNECTION } = process.env;

const connectDB = async () => {
  await mongoose
    .connect(DB_CONNECTION, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log("MongoDB NOT connected ", err));
};

module.exports = connectDB;
