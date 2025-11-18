const HackPostModel = require("../models/hackPostModel");

const createHackPost = async (req, res) => {
  try {
    const { hackName, description, imageUrl } = req.body;
    const hackPost = new HackPostModel({
      hackName,
      description,
      imageUrl,
      organizer: req.user._id,
    });
    console.log({ hackPost });
    await hackPost.save();
    res.status(201).json({ message: `${hackName} created successfully` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createHackPost };
