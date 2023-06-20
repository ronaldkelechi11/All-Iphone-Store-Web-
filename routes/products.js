const express = require("express")
const router = express.Router()
const Item = require("../models/item")

router.get("/", (req, res) => {
    // List of all iphones
    console.log("Connected");
    res.sendFile(__dirname.replace("routes", "") + "/public/screens/All Items.html")
})

router.get("/:product", (req, res) => {

})
module.exports = router