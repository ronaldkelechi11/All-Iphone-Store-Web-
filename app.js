const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express()
const PORT = 3030


const connectionUrl = "mongodb://127.0.0.1:27017/alliphonestore"

// Middleware
app.use(express.static("."))
app.use(express.urlencoded())
//  Please change later to domain of front-end
app.use(cors({
    origin: "*"
}))
app.use(express.json())

//Routes Fetching
const homeroute = require("./routes/homeroute")
const signuproute = require("./routes/signuproute")
const loginroute = require('./routes/loginroute')
const addItemRoute = require("./routes/admin")
const products = require("./routes/products")


//Routes Assigning
app.use("/home", homeroute)
app.use("/signup", signuproute)
app.use("/login", loginroute)
app.use("/products", products)
app.use("/admin", addItemRoute)

app.listen(PORT, () => {
    console.log("Server is online on " + PORT);
    mongoose.connect(connectionUrl)
        .then(() => { console.log("Connection to Mongo DB Secured"); })
        .catch((error) => {
            console.log(error);
        })
})