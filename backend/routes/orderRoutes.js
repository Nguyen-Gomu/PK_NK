const express = require('express');
const router = express.Router();

const {orders_create_order,
    orders_get_all,
    orders_get_order,
    orders_delete_order} = require( '../controller/orderController');
    
router.get('/', orders_get_all);

router.post('/', orders_create_order);

router.get('/:orderId', orders_get_order);

router.delete('/:orderId', orders_delete_order);

module.exports = router;