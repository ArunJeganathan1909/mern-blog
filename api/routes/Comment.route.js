const express = require("express");
const verifyToken = require("../utils/verifyUser");
const {
  createComment,
  getPostComments,
} = require("../controllers/Comment.controller");

const router = express.Router();

router.post("/create", verifyToken, createComment);
router.get("/getPostComments/:postId", getPostComments);

module.exports = router;
