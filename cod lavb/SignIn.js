const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname +"/SignIn.html"))
    .post((req, res) => res.send("POST SignIn"));
module.exports = router;