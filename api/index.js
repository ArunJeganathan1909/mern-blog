const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/User.route");
const authRoutes = require("./routes/Auth.route");

const app = express();
const PORT = 3000;

app.use(express.json());

require("dotenv").config();
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}!!`);
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
