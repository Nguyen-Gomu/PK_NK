const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    _id: {
        type: mongoose.Schema.Types.ObjectId,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    gender: {
        type: String,
        require: true
    },
    brand: {
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
    src: {
        type: String,
        require: true
    },
    imgDetail: {
        type: Array,
        require: true
    },
    count: {
        type: Number,
        require: true
    },
    size: {
        type: Array,
        require: true
    },
    type: {
        type: String,
        require: true
    }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;