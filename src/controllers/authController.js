const bcrypt = require("bcryptjs");
const UserModel = require("../models/userModel");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { userName, email, password, role } = req.body;
    const hashPassword = await bcrypt.hash(password, 10);
    console.log({ hashPassword });
    const user = new UserModel({
      userName,
      email,
      password: hashPassword,
      role,
    });
    console.log({ user });
    await user.save();
    res.status(201).json({ message: ` ${user.role} created successfully` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const user = await UserModel.findOne({ $or: [{ userName }, { email }] });
    console.log({ user });
    if (!user) {
      throw new Error("User not found");
    }
    const comparePassword = await bcrypt.compare(password, user.password);
    console.log({ comparePassword });
    if (!comparePassword) {
      throw new Error("Incorrect Password");
    }
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    res.cookie("token", token, { maxAge: 60 * 60 * 1000 }).json({message:"login successful"});
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { register, login };
