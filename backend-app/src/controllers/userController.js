const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function signup(req, res) {
  try {
    //get email and password of req body
    const { email, password } = req.body;

    //Hash password
    const hashPassword = await bcrypt.hash(password, 8);

    //create a user with the data
    await User.create({ email, password: hashPassword });

    //respond
    res.status(200).json({ message: "User created" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "bad request" });
  }
}

async function login(req, res) {
  try {
    //Get the email and password of req body
    const { email, password } = req.body;

    //find the use with requested email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(401).json({ message: "authentication failed" });

    //compare the sent in password with found user passowrd hash

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(401).json({ message: "authentication failed" });

    //create a jwt token
    const exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30;
    const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET);

    //set the cookie
    res.cookie("Authorization", token, {
      expires: new Date(exp * 1000),
      httpOnly: true,
      sameSite: process.env.NODE_ENV === "production" ? "None" : "lax",
      secure: process.env.NODE_ENV === "production",
    });

    //send it
    res.status(200).json({ message: "login successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "bad request" });
  }
}

function logout(req, res) {
  try {
    res.cookie("Authorization", "", { expires: new Date() });
    res.sendStatus(200);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
}

function checkAuth(req, res) {
  console.log(req.user);
  try {
    res.status(200).json({ message: "authentication success" });
  } catch (error) {
    return res.status(401).json({ message: "bad request" });
  }
}

module.exports = {
  signup,
  login,
  logout,
  checkAuth,
};
