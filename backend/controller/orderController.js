const Order = require('../models/Order');
const Product = require('../models/Product');
const mongoose = require('mongoose');


// const orders_get_all = (req, res, next) => {
//     Order.find().select('product quantity _id').populate('product', 'name').exec()
//     .then(docs => {
//         res.status(200).json({
//             count: docs.length,
//             orders: docs.map(doc => {
//                 return {
//                     _id: doc._id,
//                     product: doc.product,
//                     quantity: doc.quantity,
//                     request: {
//                         type: 'GET',
//                         url: 'http://localhost:5000/api/orders/' + doc._id
//                     }
//                 }
//             })

//         });
//     })
//     .catch(err => {
//         res.status(500).json({
//             error: err
//         });
//     });
// }

// const orders_create_order = (req, res, next) => {
//     Product.findById(req.body.productId)
//     .then(product =>{
//         if (!product) {
//             return res.status(404).json({
//                 message: "Product not found"
//             });
//         }
//         const order = new Order({
//             _id: mongoose.Types.ObjectId(),
//             customerName: req.body.customerName,
//             address: req.body.address,
//             phone: req.body.phone,
//             total: req.body.total,
//             quantity: req.body.quantity,
//             product: req.body.productId
//         });
//         return order.save()
//     })
//     .then(result => {
//         console.log(result);
//         res.status(201).json({
//             message: 'Order stored',
//             order: {
//                 _id: result._id,
//                 customerName: result.customerName,
//                 address: result.address,
//                 phone: result.phone,
//                 total: result.total,
//                 product: result.product,
//                 quantity: result.quantity
//             },
//             request: {
//                 type: 'GET',
//                 url: 'http://localhost:5000/api/orders/' + result._id
//             }
//         });
//     })
//     .catch(err=> {
//         console.log(err);
//         res.status(500).json({
//             error: err
//         })
//     });
// }

// const orders_get_order = (req, res, next) => {
//     Order.findById(req.params.orderId)
//     .populate('product').exec()
//     .then(order => {
//         if (!order) {
//             return res.status(404).json({
//                 message: "Order not found"
//             });
//         }
//         res.status(200).json({
//               order: order,
//               request: {
//                   type: 'GET',
//                   url: 'http://localhost:5000/api/orders'
//               }
//         })
//     })
//     .catch(err => {
//         res.status(500).json({
//         error: err
//         });
//     });
// }

// const orders_delete_order = (req, res, next) => {
//     Order.findOneAndRemove({_id: req.params.orderId}).exec()
//     .then(result => {
//         res.status(200).json({
//               message: "Order removed",
//               request: {
//                   type: 'POST',
//                   url: 'http://localhost:5000/api/orders',
//                   body: {productId: 'ID', quantity: 'Number'}
//               }
//         })
//     })
//     .catch(err => {
//         res.status(500).json({
//         error: err
//         });
//     });
// }


const getSumary = async (req, res) => {
    const orders = await Order.aggregate([
      {
        $group: {
          _id: null,
          numOrders: { $sum: 1 },
          totalSales: { $sum: '$totalPrice' },
        },
      },
    ]);
    // const users = await User.aggregate([
    //     {
    //       $group: {
    //         _id: null,
    //         numUsers: { $sum: 1 },
    //       },
    //     },
    //   ]);
    const dailyOrders = await Order.aggregate([
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          orders: { $sum: 1 },
          sales: { $sum: '$totalPrice' },
        },
      },
    ]);
    const productCategories = await Product.aggregate([
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
        },
      },
    ]);
    res.send({
    // users,
      orders: orders.length === 0 ? [{ numOrders: 0, totalSales: 0 }] : orders,
      dailyOrders,
      productCategories,
    });
}

const getOrderById = async (req, res) => {
    const order = await Order.findById(req.params.id);
    if (order) {
        res.send(order);
    } else {
        res.status(404).send({ message: 'Order Not Found' });
    }
}

const createOrder = async (req, res) => {
      const order = new Order({
        orderItems: req.body.orderItems,
        //user: req.user._id,
        shipping: req.body.shipping,
        payment: req.body.payment,
        itemsPrice: req.body.itemsPrice,
        taxPrice: req.body.taxPrice,
        shippingPrice: req.body.shippingPrice,
        totalPrice: req.body.totalPrice,
      });
      const createdOrder = await order.save();
      res.status(201).send({ message: 'New Order Created', order: createdOrder });
}

module.exports = {
    getSumary,
    getOrderById,
    createOrder
    // orders_get_all,
    // orders_get_order,
    // orders_create_order,
    // orders_delete_order
}