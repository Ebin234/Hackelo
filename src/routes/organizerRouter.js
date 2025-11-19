const router = require("express").Router();
const {
  createHackPost,
  getOrganizerHackPosts,
  getAllJoinRequests,
} = require("../controllers/organizerRoutesController");
const { organizerAuth } = require("../middlewares/organizerAuth");
const commonAuth = require("../middlewares/commonAuth");

router.post(
  "/organizer/create-hack-post",
  commonAuth,
  organizerAuth,
  createHackPost
);
router.get(
  "/organizer/get-all-hack-post",
  commonAuth,
  organizerAuth,
  getOrganizerHackPosts
);

router.get(
  "/organizer/get-join-request/:postId",
  commonAuth,
  organizerAuth,
  getAllJoinRequests
);
module.exports = router;
