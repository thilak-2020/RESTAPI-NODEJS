const Router = require('express');
const { validationResult } = require('express-validator');
var payLoad = require('../../config/payload');
const orderRouter = Router();
const orderCtrl = require('./order.controller');

orderRouter.post('/', payLoad.createOrder, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    orderCtrl.createOrder(req, res)
});

orderRouter.get('/:orderId', async (req, res) => {
    orderCtrl.getOrder(req, res)
});

orderRouter.put('/', payLoad.updateOrder, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    orderCtrl.updateOrder(req, res)
});

module.exports = orderRouter;