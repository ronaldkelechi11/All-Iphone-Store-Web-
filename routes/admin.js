const express = require("express")
const router = express.Router()
const Item = require("../models/item")

router.get("/additem", (req, res) => {
    console.log("Connected");
    res.sendFile(__dirname.replace("routes", "") + "/public/views/Add Item.html")
})

router.post("/", (req, res) => {
    // Add new item
})
module.exports = router