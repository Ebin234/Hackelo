const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const commonAuth = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      throw new Error("Token not found");
    }
    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);
    if (!verifyToken) {
      throw new Error("Invalid token");
    }
    const user = await UserModel.findById(verifyToken.id).select(
      "_id userName email role access"
    );
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = commonAuth;
