const express = require("express");
const router = express.Router();
const { getMessage } = require("../controllers/mainpage.controllers");
const Post = require("../models/post");

/* GET home page */
router.get("/", getMessage);

module.exports = router;
