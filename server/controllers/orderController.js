const router = require('express').Router();
const orderModel = require('../models/orders/orderModel');
// const auth = require('../authentication/auth');

router.post('/new', orderModel.createOrder)
router.get('/:id', orderModel.getOrders)
router.get('/', orderModel.adminGet)
router.put('/:id', orderModel.updateOrder)

module.exports = router;