const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = requre("passport");

//Models
const Elders = require("../../models/Elder");

router.get("/test", (req, res) => {
  res.json({ msg: "This is the elder route"});
});


module.exports = router;