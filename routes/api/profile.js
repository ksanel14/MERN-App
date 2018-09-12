const express = require("express");
const router = express.Router();

// @route public GET
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
