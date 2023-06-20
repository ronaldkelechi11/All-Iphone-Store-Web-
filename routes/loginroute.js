const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const User = require("../models/user")

router.post("/", (req, res) => {
    var email = req.body.email
    var password = req.body.password

    if (email == 'admin@alliphonestore.com' && password == 'adminPassword') {
        res.status(300).send()
    }
    else {
        var user = User.findOne({ email, password })
            .then((response) => {
                if (response != null) {
                    res.status(200).send()
                }
                else (
                    res.status(400).send()
                )
            }).catch((err) => {
                console.log(err);
            });
    }
})

module.exports = router