const jwt = require("jsonwebtoken");

//read dot env file
require("dotenv").config();

//Pate your actual JWT token here
const token = jwt.sign({ sub: "64f123abc456" }, process.env.SECRET, {
  expiresIn: "1h",
});

console.log("your token", token);

//secret os jwt.sign()
const secret = process.env.SECRET;

try {
  const decoded = jwt.verify(token, secret);
  console.log("Token is valid");
  console.log("Decoded payload:", decoded);
} catch (err) {
  console.error("Token is invalid or expired:", err.message);
}
