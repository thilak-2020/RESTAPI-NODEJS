const Router = require('express');
const healthRouter = Router();
const {serverHealthCheck} = require('./health.controller');

healthRouter.get('/', serverHealthCheck);
module.exports = healthRouter;
