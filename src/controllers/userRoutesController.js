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

const createJoinRequest = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;
    let post = await HackPostModel.findById(id);
    if (!post) {
      throw new Error("Post id not found in DB");
    }
    const userExist = post.requestedUsers.includes(user._id);
    if (userExist) {
      throw new Error("User already Exist");
    } else {
      const data = await HackPostModel.findByIdAndUpdate(
        id,
        {
          $push: {
            requestedUsers: user._id,
          },
        },
        { returnDocument: "after" }
      );
      res.json({ message: "request sent successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// try {
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }

module.exports = { getAllPosts, createJoinRequest };
