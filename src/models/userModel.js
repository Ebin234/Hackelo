const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    unique: true,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required:true,
    enum: {
      values: ["organizer", "user"],
      message: `{VALUE} is not supported`,
    },
  },
  access:{
    type:[String],
  }
});

module.exports = mongoose.model("User", UserSchema);
