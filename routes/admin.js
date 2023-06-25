const express = require("express")
const router = express.Router()
const Item = require("../models/item")
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    filename: (req, file, cb) => {
        console.log(Date.now() + file.fieldname); //This is what is meant to be saved to the image
        cb(null, Date.now() + file.fieldname);
    },
    destination: (req, file, cb) => {
        cb(null, "images");
    }
})
const upload = multer({ storage: storage })


const multipleUpload =
    upload.fields([
        { name: 'image1', maxCount: 1 },
        { name: 'image2', maxCount: 1 },
        { name: 'image3', maxCount: 1 }])

router.post("/addItem", multipleUpload, (req, res) => {
    var image1 = req.files.image1
    var name = req.body.name
    var price = req.body.price
    var condition = req.body.condition
    var RAM = req.body.RAM
    var storageSize = req.body.storageSize
    var color = req.body.color
    var issues = req.body.issues

    const item = new Item({ name, price, condition, image: [""], description: { RAM, storageSize, color, issues } })
    item.save()
        .then(response => {
            res.status(200).send()
        })
        .catch(err => { res.status(501).send(), console.log(err); })

    //Now find a way to get the saved file name then add it as a string to the mongo mondel
})


router.post("/deleteItem", (req, res) => {
    // Delete new item

})

router.post("/updateItem", (req, res) => {
    // update new item

})
module.exports = router