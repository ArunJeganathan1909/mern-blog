const express = require("express");
const verifyToken = require("../utils/verifyUser");
const { createComment } = require("../controllers/Comment.controller");

const router = express.Router();

router.post("/create", verifyToken, createComment);

module.exports = router;
