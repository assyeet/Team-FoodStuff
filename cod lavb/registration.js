const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname +"/registration.html"))
    .post((req, res) => res.send("POST REGISTRATION"));
module.exports = router;