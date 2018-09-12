const express = require("express");
const router = express.Router();

// @route public GET
router.get("/test", (req, res) => res.json({ msg: "Posts work" }));

module.exports = router;
