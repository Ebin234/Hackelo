const router = require("express").Router();
const {
  createHackPost,
  getOrganizerHackPosts,
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

module.exports = router;
