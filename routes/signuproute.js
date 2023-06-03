const express = require('express');
const router = express.Router();
const User = require("../providers/user")

let data = ""

router.get("/", (req, res) => {
    res.sendFile(__dirname.replace("routes", "") + "/public/views/SignUp.html")
})
router.post("/", (req, res) => {
    var name = req.body.name
    var email = req.body.email
    var telephone = req.body.telephone
    var address = req.body.address
    var dateOfBirth = req.body.dateofbirth
    var password = req.body.password

    var user = new User({
        name, email, telephone, address, dateOfBirth, password
    })

    User.find({ email })
        .then((response) => {
            if (response == "") {
                user.save()
                res.status(200).send()
                console.log("User saved");
            }
            else {
                console.log("User Exists: " + email);
                res.status(400).send()
            }
        })
})

module.exports = router