const mongoose = require('mongoose');

const descriptionSchema = new mongoose.Schema({
    _id: 0,
    RAM: Number,
    storageSize: Number,
    color: String,
    issues: String,
})
const itemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    condition: {
        type: String,
        required: true,
    },
    image: {
        type: [String],
        required: true,
    },
    description: descriptionSchema
})
// name, price, condition, image, description{ram, storageSize, color, issues}



module.exports = mongoose.model("Item", itemSchema);