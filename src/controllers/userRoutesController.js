const HackPostModel = require("../models/hackPostModel");
const JoinRequestModel = require("../models/joinRequestModel");

const getAllPosts = async (req, res) => {
  try {
    const posts = await HackPostModel.find().select(
      "hackName description imageUrl organizer"
    );
    console.log({ posts });
    res.json({ data: posts, message: "Fetch success" });
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
    // console.log(post.acceptedUsers.includes(user.id));
    if (
      post.acceptedUsers.includes(user.id) ||
      post.rejectedUsers.includes(user.id)
    ) {
      throw new Error("Join request already send and verified");
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
      res.status(201).json({ message: "Request created successfully" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getParticipants = async (req, res) => {
  try {
    const { hackId } = req.params;
    const user = req.user;
    // console.log(user._id);
    const hackPost = await HackPostModel.findById(hackId);
    // console.log({ hackPost });
    if (!hackPost.acceptedUsers.includes(user._id)) {
      return res.status(403).json({ message: "Access Denied" });
    }
    const newHackPost = await hackPost.populate("acceptedUsers");
    const data = newHackPost.acceptedUsers.filter((value) => {
      if (value._id.toString() !== user._id.toString()) {
        return value;
      }
    });
    // console.log({ data });
    res.json({ data, message: "Fetch successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// try {
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }

module.exports = { getAllPosts, createJoinRequest, getParticipants };
