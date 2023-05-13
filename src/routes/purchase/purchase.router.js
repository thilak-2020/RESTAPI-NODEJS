const Router = require('express');
const { validationResult } = require('express-validator');
var payLoad = require('../../config/payload');
const purchaseRouter = Router();
const purchaseCtrl = require('./purchase.controller');

purchaseRouter.post('/', payLoad.purchaseOrder, async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    purchaseCtrl.createPurchaseOrder(req, res)
});

purchaseRouter.put('/', payLoad.updatePurchaseOrder, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  purchaseCtrl.updatePurchaseOrder(req, res)
});

purchaseRouter.post('/report', payLoad.purchaseOrderReport ,async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() })
  }
  purchaseCtrl.purchaseOrderReport(req, res)
});

module.exports = purchaseRouter;