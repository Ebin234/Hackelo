const HackPostModel = require("../models/hackPostModel");
const JoinRequestModel = require("../models/joinRequestModel");

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
      throw new Error("Post not found");
    }
    const userExist = await JoinRequestModel.findOne({
      user: user._id,
      hackPostId: post._id,
    });
    if (userExist) {
      throw new Error("User already Exist");
    } else {
      const joinRequest = new JoinRequestModel({
        user: user._id,
        organizer: post.organizer,
        hackPostId: post._id,
      });
      console.log({ joinRequest });
      await joinRequest.save();
      res.status(201).json({ message: "request created successfully" });
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
