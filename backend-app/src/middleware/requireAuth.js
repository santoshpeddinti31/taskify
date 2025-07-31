const jwt = require("jsonwebtoken");
const User = require("../models/user");

async function authMiddleWare(req, res, next) {
  try {
    //read the token of cookies
    const token = req.cookies.Authorization;

    if (!token) return res.status(401).json({ message: "not authenticated" });

    //Decode the token
    const decoded = jwt.verify(token, process.env.SECRET);

    //find user using id from token payload
    const user = await User.findById(decoded.sub);
    if (!user) return res.status(401).json({ message: "not authenticated" });

    //attach user to req object
    req.user = user;

    //proceed
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      console.log("Token expired");
    } else {
      console.log("Auth middleware Error:", err);
    }
    return res.status(401).json({ message: "not authenticated" });
  }
}

module.exports = authMiddleWare;
