const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname +"/first.html"))
    .post((req, res) => res.send("POST FIRST"));
module.exports = router;