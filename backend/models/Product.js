const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {
        type: String,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    src: {
        type: Array,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    kind: {
        type: String,
        require: true
    },
    size: {
        type: Array,
        require: true
    },
    count: {
        type: Number,
        require: true
    },
    quantities: {
        type: Number,
        require: true,
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;