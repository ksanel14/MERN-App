const express = require("express");
const router = express.Router();

// @route public GET
router.get("/test", (req, res) => res.json({ msg: "Users works" }));

module.exports = router;
