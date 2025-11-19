const router = require("express").Router();
const {
  getAllPosts,
  createJoinRequest,
} = require("../controllers/userRoutesController");
const commonAuth = require("../middlewares/commonAuth");

router.get("/user/get-all-hack-posts", commonAuth, getAllPosts);
router.post("/user/send-request/:id", commonAuth, createJoinRequest);

module.exports = router;
