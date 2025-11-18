const mongoose = require("mongoose");

const HackPostSchema = new mongoose.Schema({
  hackName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
  },
  users: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("HackPost", HackPostSchema);
