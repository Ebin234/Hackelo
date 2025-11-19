const HackPostModel = require("../models/hackPostModel");

const getAllPosts = async (req, res) => {
  try {
    const posts = await HackPostModel.find().select(
      "hackName description imageUrl organizer"
    );
    console.log({ posts });
    res.json({ data: posts, message: "fetch success" });
  } catch (err) {

    res.status(400).json({ message: err.message });
  }
};



// try {
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }

module.exports = { getAllPosts };
