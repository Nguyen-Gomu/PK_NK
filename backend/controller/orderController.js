const Order = require('../models/Order');
const Product = require('../models/Product');

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
        shipping: req.body.shipping,
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
}