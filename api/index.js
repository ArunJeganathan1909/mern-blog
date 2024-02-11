const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/User.route");
const authRoutes = require("./routes/Auth.route");
const postRoutes = require("./routes/Post.route");
const commentRoutes = require("./routes/Comment.route");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cookieParser());

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
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Servor Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
