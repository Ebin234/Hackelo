const mongoose = require("mongoose");

const TeamSchema = new mongoose.Schema({
  hackPostId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "User",
  },
});

module.exports = mongoose.model("Team", TeamSchema);
