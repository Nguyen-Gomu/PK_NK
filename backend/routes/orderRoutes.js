const express = require('express');
const router = express.Router();
const checkAuth = require('../authentication/check_auth');

const OrdersController = require( '../controller/orderController');

//Handle incoming GET requests to /orders
//checkAuth should be located in routes specifying middleware usage before the 'OrdersController.orders_get_all' runs
router.get('/', checkAuth, OrdersController.orders_get_all);

router.post('/', checkAuth, OrdersController.orders_create_order);

router.get('/:orderId', checkAuth, OrdersController.orders_get_order);

router.delete('/:orderId', checkAuth, OrdersController.orders_delete_order);

module.exports = router;