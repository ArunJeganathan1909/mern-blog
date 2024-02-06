const express = require("express");
const signupController = require("../controllers/Auth.controller");

const router = express.Router();

router.post("/signup", signupController);

module.exports = router;
