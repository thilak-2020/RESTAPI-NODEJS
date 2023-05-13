const express = require('express');
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')

const userRouter = require('./user/user.router');
const healthRouter = require('./health/health.router');
const purchaseOrderRouter = require('./purchase/purchase.router');
const inventoryRouter = require('./inventory/inventory.router');
const orderRouter = require('./order/order.router');

const api = express.Router()

api.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

api.use('/health', healthRouter);
api.use('/user', userRouter);
api.use('/purchaseorder', purchaseOrderRouter);
api.use('/inventory', inventoryRouter);
api.use('/order', orderRouter);

module.exports = api
