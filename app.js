const express = require('express');
const mongoose = require('mongoose');
const app = express()
const PORT = 3030
const connectionUrl = "mongodb://localhost:27017/alliphonestore"

// Middleware
app.use(express.static("."))
app.use(express.urlencoded())
app.use(express.json())

//Routes Fetching
const homeroute = require("./routes/homeroute")
const signuproute = require("./routes/signuproute")
const productviewroute = require("./routes/productviewroute")
const loginroute = require('./routes/loginroute')
const addItemRoute = require("./routes/additemroutes")
const allItemRoute = require("./routes/allitemroutes")


//Routes Assigning
app.use("/home", homeroute)
app.use("/signup", signuproute)
app.use("/login", loginroute)
app.use("/productview", productviewroute)
app.use("/allitem", allItemRoute)
app.use("/admin/additem", addItemRoute)

app.get("/", (req, res) => {
    res.redirect("/home")
})

app.listen(PORT, () => {
    console.log("Server is online on " + PORT);
    mongoose.connect(connectionUrl)
        .then(() => { console.log("Connection to Mongo DB Secured"); })
        .catch((error) => {
            console.log("Error");
        })
})