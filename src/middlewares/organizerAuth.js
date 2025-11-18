const organizerAuth = async (req, res, next) => {
  try {
    if (req.user.role === "organizer") {
      next();
    } else {
      return res.status(401).json({ message: "Access Denied" });
    }
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { organizerAuth };
