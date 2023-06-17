const express = require('express');
const router = express.Router();
const Item = require("../models/item");

router.get("/:product", (req, res) => {
    var product = req.params.product;
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/productview.html")
})

module.exports = router