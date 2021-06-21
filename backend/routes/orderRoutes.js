const express = require('express');
const router = express.Router();
const checkAuth = require('../authentication/check_auth');

const {orders_create_order,
    orders_get_all,
    orders_get_order,
    orders_delete_order} = require( '../controller/orderController');

//Handle incoming GET requests to /orders
//checkAuth should be located in routes specifying middleware usage before the 'OrdersController.orders_get_all' runs
router.get('/', checkAuth, orders_get_all);

router.post('/', checkAuth, orders_create_order);

router.get('/:orderId', checkAuth, orders_get_order);

router.delete('/:orderId', checkAuth, orders_delete_order);

module.exports = router;