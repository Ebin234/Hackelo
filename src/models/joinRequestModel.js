const mongoose = require("mongoose");

const JoinRequestSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  hackPostId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  status: {
    type: String,
    enum: {
      values: ["PENDING", "ACCEPTED", "REJECTED"],
      message: `{VALUE} is not supported`,
    },
    default:"PENDING"
  },
});

module.exports = mongoose.model("JoinRequest", JoinRequestSchema);
