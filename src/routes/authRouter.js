const express = require("express");
const UserModel = require("../models/userModel");
const bcrypt = require('bcryptjs');

const router = express.Router();

router.post("/signUp", async(req, res) => {
  try {
    const user = req.body;
    user.password = await bcrypt.hash(req.body.password,10);
    const userModel = new UserModel(user);
    // console.log({userModel})
    const data = await userModel.save();
    res.json({data:data})
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
