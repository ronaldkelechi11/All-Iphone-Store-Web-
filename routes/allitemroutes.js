const express = require("express")
const router = express.Router()
const Item = require("../providers/item")

router.get("/", (req, res) => {
    console.log("Connected");
    res.sendFile(__dirname.replace("routes", "") + "/public/views/All Items.html")
})

router.post("/", (req, res) => {

})
module.exports = router