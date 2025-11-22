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
  status: {
    type: String,
    enum: {
      values: ["PENDING", "REJECTED"],
      message: `{VALUE} is not supported`,
    },
    default: "PENDING",
  },
});

module.exports = mongoose.model(
  "TeamFormationRequest",
  TeamFormationRequestModelSchema
);
