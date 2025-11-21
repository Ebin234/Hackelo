const mongoose = require("mongoose");

const TeamFormationRequestModelSchema = new mongoose.Schema({
  hackPostId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  fromUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  toUser: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Team",
  },
});

module.exports = mongoose.model(
  "TeamFormationRequest",
  TeamFormationRequestModelSchema
);
