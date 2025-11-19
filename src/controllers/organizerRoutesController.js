const HackPostModel = require("../models/hackPostModel");
const JoinRequestModel = require("../models/joinRequestModel");

const createHackPost = async (req, res) => {
  try {
    const { hackName, description, imageUrl } = req.body;
    const hackPost = new HackPostModel({
      hackName,
      description,
      imageUrl,
      organizer: req.user._id,
    });
    // console.log({ hackPost });
    await hackPost.save();
    res.status(201).json({ message: `${hackName} created successfully` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getOrganizerHackPosts = async (req, res) => {
  try {
    const organizer = req.user;
    // console.log({ organizer });
    const posts = await HackPostModel.find({ organizer: organizer._id });
    // console.log({ posts });
    res.json({ data: posts, message: "Fetch successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getAllJoinRequests = async (req, res) => {
  try {
    const { postId } = req.params;
    const { _id } = req.user;
    const joinRequests = await JoinRequestModel.find({
      organizer: _id,
      hackPostId: postId,
    }).populate("user", "userName email");
    res.json({ data: joinRequests, message: "Fetch Successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// try {
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }

module.exports = { createHackPost, getOrganizerHackPosts, getAllJoinRequests };
