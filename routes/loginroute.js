const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const User = require("../providers/user")

router.get("/", (req, res) => {
    res.sendFile(__dirname.replace("routes", "") + "/public/views/Login.html")
})
router.post("/", (req, res) => {
    var email = req.body.email
    var password = req.body.password

    if (email == 'admin' && password == 'adminpassword') {
        res.status(300).send()
    }
    else {
        var user = User.findOne({ email, password })
            .then((response) => {
                console.log(response);
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