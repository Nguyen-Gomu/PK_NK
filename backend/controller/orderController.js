const Order = require('../models/Order');
const Product = require('../models/Product');
const mongoose = require('mongoose');


//functions used for routing (similar to MVC properties - Models, View, Controllers)
const orders_get_all = (req, res, next) => {
    Order.find().select('product quantity _id').populate('product', 'name').exec()
    .then(docs => {
        res.status(200).json({
            count: docs.length,
            orders: docs.map(doc => {
                return {
                    _id: doc._id,
                    product: doc.product,
                    quantity: doc.quantity,
                    request: {
                        type: 'GET',
                        url: 'http://localhost:3000/orders/' + doc._id
                    }
                }
            })

        });
    })
    .catch(err => {
        res.status(500).json({
            error: err
        });
    });
}

const orders_create_order = (req, res, next) => {
    Product.findById(req.body.productId)
    .then(product =>{
        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            });
        }
        const order = new Order({
            _id: mongoose.Types.ObjectId(),
            quantity: req.body.quantity,
            product: req.body.productId
        });
        return order.save()
    })
    .then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Order stored',
            createdOrder: {
                _id: result._id,
                product: result.product,
                quantity: result.quantity
            },
            request: {
                type: 'GET',
                url: 'http://localhost:3000/orders/' + result._id
            }
        });
    })
    .catch(err=> {
        console.log(err);
        res.status(500).json({
            error: err
        })
    });
}

const orders_get_order = (req, res, next) => {
    Order.findById(req.params.orderId)
    //notice the removal of 'name' which allows extra info to be viewed individually
    .populate('product').exec()
    //notification when order is not found
    .then(order => {
        if (!order) {
            return res.status(404).json({
                message: "Order not found"
            });
        }
        res.status(200).json({
              order: order,
              request: {
                  type: 'GET',
                  url: 'http://localhost:3000/orders'
              }
        })
    })
    .catch(err => {
        res.status(500).json({
        error: err
        });
    });
}

const orders_delete_order = (req, res, next) => {
    Order.findOneAndRemove({_id: req.params.orderId}).exec()
    .then(result => {
        res.status(200).json({
              message: "Order removed",
              request: {
                  type: 'POST',
                  url: 'http://localhost:3000/orders',
                  body: {productId: 'ID', quantity: 'Number'}
              }
        })
    })
    .catch(err => {
        res.status(500).json({
        error: err
        });
    });
}

module.exports = {
    orders_get_all,
    orders_get_order,
    orders_create_order,
    orders_delete_order
}