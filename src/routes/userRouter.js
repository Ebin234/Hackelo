const router = require("express").Router();
const { getAllPosts } = require("../controllers/userRoutesController");
const commonAuth = require("../middlewares/commonAuth");

router.get("/user/get-all-hack-posts", commonAuth, getAllPosts);

module.exports = router;
