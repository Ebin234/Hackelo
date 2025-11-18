const createHackPost = (req, res) => {
  try {
    res.json({ data: req.user });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { createHackPost };
