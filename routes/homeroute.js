const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.sendFile(__dirname.replace("routes", "") + "/public/views/Home.html")
})

module.exports = router