const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    name:{
        type: 'string',
        require: true
    },
    src:{
        type:'array',
        require: true
    },
    description:{
        type: 'string',
        require: true
    },
    content:{
        type: 'string',
        require: true
    },
    price:{
        type: 'number',
        require: true
    },
    kind:{
        type: 'string',
        require: true
    },
    size:{
        type: 'array',
        require: true
    },
    count:{
        type: 'number',
        require: true
    },
    quantities:{
        type: 'number',
        require: true,
    }
})

const Product = mongoose.model('Product',productSchema)

module.exports=Product;