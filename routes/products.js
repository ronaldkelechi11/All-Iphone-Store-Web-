const express = require("express")
const router = express.Router()
const Item = require("../models/item")

router.get("/", (req, res) => {
    // List of all iphones
    console.log("Connected");
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/All Items.html")
})

router.get("/:product", (req, res) => {
    var product = req.params.product
    console.log(product);
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/productview.html")
})
module.exports = router