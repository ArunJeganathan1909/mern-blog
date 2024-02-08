const jwt = require("jsonwebtoken");
const errorHandler = require("./error");

const verifyToken = (req, res, next) => {
  const token = req.cookies.acces_token;
  if (!token) {
    return next(errorHandler(401, "Unathorized"));
  }
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return next(errorHandler(401, "Unathorized"));
    }
    req.user = user;
    next();
  });
};

module.exports = verifyToken;
