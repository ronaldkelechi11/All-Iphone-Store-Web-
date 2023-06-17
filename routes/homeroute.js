const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/Home.html")
})

module.exports = router