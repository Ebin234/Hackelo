const router = require("express").Router();
const { createHackPost } = require("../controllers/hackPostController");
const { organizerAuth } = require("../middlewares/organizerAuth");
const commonAuth = require("../middlewares/commonAuth");

router.post("/organizer/create", commonAuth, organizerAuth, createHackPost);

module.exports = router;
