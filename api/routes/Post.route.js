const express = require("express");
const verifyToken = require("../utils/verifyUser");
const {
  create,
  getPosts,
  deletePost,
} = require("../controllers/Post.controller");

const router = express.Router();

router.post("/create", verifyToken, create);
router.get("/getPosts", getPosts);
router.delete("/deletePost/:postId/:userId", verifyToken, deletePost);

module.exports = router;
