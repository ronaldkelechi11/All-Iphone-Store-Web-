const express = require("express")
const router = express.Router()
const Item = require("../models/item")


router.post("/addItem", (req, res) => {
    // Add new item
    console.log(req.body);
    var name = req.body.name
    var price = req.body.price
    var condition = req.body.condition
    var image = [req.body.image1, req.body.image2, req.body.image3]
    var RAM = req.body.RAM
    var storageSize = req.body.storageSize
    var color = req.body.color
    var issues = req.body.issues

    console.log(req.body.image1, utf(8));

    const item = new Item({ name, price, condition, image, description: { RAM, storageSize, color, issues } })
    console.log(item);
    item.save()
        .then(response => {
            console.log(response);
            res.status(200).send()
        })
        .catch(err => { res.status(501).send(), console.log(err); })

})

router.post("/deleteItem", (req, res) => {
    // Delete new item

})

router.post("/updateItem", (req, res) => {
    // update new item

})
module.exports = router