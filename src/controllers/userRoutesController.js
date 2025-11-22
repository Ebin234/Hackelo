const HackPostModel = require("../models/hackPostModel");
const JoinRequestModel = require("../models/joinRequestModel");
const TeamModel = require("../models/teamModel");
const TeamFormationRequestModel = require("../models/teamFormationRequestModel");

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

const teamFormationRequest = async (req, res) => {
  try {
    const user = req.user;
    const { hackPostId, participantId } = req.params;
    console.log({ user, hackPostId, participantId });
    const hackPost = await HackPostModel.findById(hackPostId);
    if (!hackPost) {
      throw new Error("HackPost Not Found");
    }
    if (!hackPost.acceptedUsers.includes(participantId)) {
      throw new Error("User not found in this hack post");
    }
    // const teams = await TeamModel.find({hackPostId})
    // console.log({teams})
    const requestExist = await TeamFormationRequestModel.findOne({
      $or: [
        { hackPostId, fromUser: user._id, toUser: participantId },
        { hackPostId, fromUser: participantId, toUser: user._id },
      ],
    });
    if (requestExist) {
      throw new Error("Request already exist");
    }
    console.log({ requestExist });
    const teamFormationRequest = new TeamFormationRequestModel({
      hackPostId,
      fromUser: user._id,
      toUser: participantId,
    });
    console.log({ teamFormationRequest });
    await teamFormationRequest.save();

    res.status(201).json({ message: "Request created Successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getTeamFormationRequests = async (req, res) => {
  try {
    const { hackPostId } = req.params;
    const user = req.user;
    console.log({ hackPostId, user });
    const requests = await TeamFormationRequestModel.find({
      hackPostId,
      toUser: user._id,
    });
    console.log({ requests });
    res.json({ data: requests, message: "Fetch successful" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const handleTeamFormationRequests = async (req, res) => {
  try {
    const { reqId } = req.params;
    const user = req.user;
    const { status } = req.query;
    const allowedStatus = ["ACCEPTED", "REJECTED"];
    if (!allowedStatus.includes(status)) {
      throw new Error(`${status} not allowed`);
    }
    /**
     * Finding the request with reqId, userId and the PENDING status state
     */
    const request = await TeamFormationRequestModel.findOne({
      _id: reqId,
      toUser: user._id,
      status: "PENDING",
    });
    //  If no matching request is found, throw an error.
    if (!request) {
      throw new Error("Request not found");
    }
    let data;
    if (status === "ACCEPTED") {
      /**
       * Fetch the team details of the user who sent the request (fromUser)
       */
      let teamExit = await TeamModel.findOne({
        hackPostId: request.hackPostId,
        members: request.fromUser,
      });
      console.log({ teamExit });
      // If request exist then add the toUser to the team  
      if (teamExit) {
        data = await TeamModel.findByIdAndUpdate(
          { _id: teamExit[0]._id },
          { $push: { members: user._id } },
          { returnDocument: "after" }
        );
        console.log({ data });
      } else {
        // Create a new team
        const team = new TeamModel({
          hackPostId: request.hackPostId,
          members: [request.fromUser, request.toUser],
        });
        console.log({ team });
        data = await team.save();
      }
      /**
       * After forming the team, Remove all other PENDING team formation requests for this User
       * REJECTED requests remain untouched.
       */
      await TeamFormationRequestModel.deleteMany({
        $or: [
          {
            hackPostId: request.hackPostId,
            fromUser: user._id,
            status: "PENDING",
          },
          {
            hackPostId: request.hackPostId,
            toUser: user._id,
            status: "PENDING",
          },
        ],
      });
    } else {
      /**
       * If the status is REJECTED, update the request status to REJECTED and save it to the database.
       */
      request.status = "REJECTED";
      data = await request.save();
    }

    res.json({ data, message: `Request ${status} successfully` });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// try {
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }

module.exports = {
  getAllPosts,
  createJoinRequest,
  getParticipants,
  teamFormationRequest,
  getTeamFormationRequests,
  handleTeamFormationRequests,
};
