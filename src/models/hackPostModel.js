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
    default:"https://imgs.search.brave.com/FhMcYnc9KzAXz3c9GTKAAnAyVjx7dE8VOmhHOwnNp7g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG5p/Lmljb25zY291dC5j/b20vaWxsdXN0cmF0/aW9uL3ByZW1pdW0v/dGh1bWIvZW1wdHkt/ZmlsZS1pbGx1c3Ry/YXRpb24tc3ZnLWRv/d25sb2FkLXBuZy0x/MTgzODI1MS5wbmc"
  },
  requestedUsers: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  acceptedUsers: {
    type: [mongoose.Schema.Types.ObjectId],
  },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
});

module.exports = mongoose.model("HackPost", HackPostSchema);
