const router = require("express").Router();
const {
  getAllPosts,
  createJoinRequest,getParticipants
} = require("../controllers/userRoutesController");
const commonAuth = require("../middlewares/commonAuth");

router.get("/user/get-all-hack-posts", commonAuth, getAllPosts);
router.post("/user/send-request/:id", commonAuth, createJoinRequest);
router.get("/user/get-all-participants/:hackId",commonAuth,getParticipants);

module.exports = router;
