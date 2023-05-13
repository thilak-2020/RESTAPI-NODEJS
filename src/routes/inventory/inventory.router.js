const Router = require('express');
const { validationResult } = require('express-validator');
var payLoad = require('../../config/payload');
const inventoryRouter = Router();
const inventoryCtrl = require('./inventory.controller');

inventoryRouter.post('/', payLoad.createInventory ,async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    inventoryCtrl.createInventory(req, res)
});

inventoryRouter.put('/', payLoad.updateInventory ,async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    inventoryCtrl.updateInventory(req, res)
});

inventoryRouter.delete('/:productId', async (req, res) => {
   inventoryCtrl.deleteInventory(req, res)
});

inventoryRouter.post('/report', payLoad.inventoryReport , async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    inventoryCtrl.getInventoryReport(req, res)
 });

module.exports = inventoryRouter;