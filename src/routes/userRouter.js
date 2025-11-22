const router = require("express").Router();
const {
  getAllPosts,
  createJoinRequest,
  getParticipants,
  teamFormationRequest,
  getTeamFormationRequests,
  handleTeamFormationRequests,
} = require("../controllers/userRoutesController");
const commonAuth = require("../middlewares/commonAuth");

router.get("/user/get-all-hack-posts", commonAuth, getAllPosts);
router.post("/user/send-request/:id", commonAuth, createJoinRequest);
router.get("/user/get-all-participants/:hackId", commonAuth, getParticipants);
router.post(
  "/user/team-formation/:hackPostId/request/:participantId",
  commonAuth,
  teamFormationRequest
);
router.get(
  "/user/team-formation/get-requests/:hackPostId",
  commonAuth,
  getTeamFormationRequests
);
router.post(
  "/user/team-formation/handle-Request/:reqId",
  commonAuth,
  handleTeamFormationRequests
);

module.exports = router;
