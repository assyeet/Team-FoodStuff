const express = require("express");
const router = express.Router();
router
    .route("/")
    .get((req, res) => res.sendFile(__dirname +"/main.php"))
    .post((req, res) => res.send("POST HOME"));
module.exports = router;