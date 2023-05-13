const db = require('../../models/mongodb');
const { successJsonRes, failedJsonRes, getProcessingTime } = require('../../lib/helper')
const message = require('../../config/message.config')
const generalValue = require('../../config/constant');

exports.createOrder = async function(req, res) {
    let start = getProcessingTime();    
    let reqInventoryData = req.body;
    try {
      let orderData = {
        user_id : reqInventoryData.user_id,
        orderdate : reqInventoryData.orderdate,
        orderList : reqInventoryData.orderList,
        createdAt: Date.now(),
        updatedAt: Date.now()
      }
      db.Order.create(orderData).then(orderDataRes => {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYCREATE} ${end}${generalValue.LOG_TIME_UNIT}`);
        return res.send(successJsonRes(message.createOrderSuccess, orderDataRes))
      });
    } catch (error) {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.CREATEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
        //logger.error(generalValue.CREATEORDER , error);
        return res.send(failedJsonRes(error.message, 500));
    }
}

exports.getOrder = async function(req, res) {
    let start = getProcessingTime();    
    try {
        let orderData = await db.Order.findById(req.params.orderId);
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.GETORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
        console.log(orderData)
        if(orderData) {
            return res.send(successJsonRes(message.getOrderSuccess, orderData));
        } else {
            return res.send(successJsonRes(message.orderNotFound, orderData)); 
        }
    } catch (error) {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.GETORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
        //logger.error(generalValue.GETORDER , error);
        return res.send(failedJsonRes(error.message, 500));
    }
}

exports.updateOrder = async function(req, res) {
    let start = getProcessingTime();    
    let reqOrderData = req.body;
    try {
        let query = { _id : reqOrderData.orderId };
        let orderData = {
            user_id : reqOrderData.user_id,
            orderdate : reqOrderData.orderdate,
            orderList : reqOrderData.orderList,
            updatedAt: Date.now()
          }
        db.Order.updateOne(query , orderData, (error) => {
            if(error) {
                let end = getProcessingTime(start);
               // logger.info(`${generalValue.METHOD} ${generalValue.UPDATEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
                //logger.error(generalValue.UPDATEORDER , error);
                return res.send(failedJsonRes(error, 500)); 
            }
            let end = getProcessingTime(start);
            //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
            return res.send(successJsonRes(message.updateInventorySuccess, data=null))
        });
    } catch (error) {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYUPDATE} ${end}${generalValue.LOG_TIME_UNIT}`);
        //logger.error(generalValue.INVENTORYUPDATE , error);
        return res.send(failedJsonRes(error.message, 500));
    }

}

exports.deleteOrder = async function(req, res) {
    let start = getProcessingTime();  
    const productId = req.params.productId;  
    try {
        db.Order.deleteOne({ product_id: productId }, function(error) {
            if (error) {
                let end = getProcessingTime(start);
                //logger.info(`${generalValue.METHOD} ${generalValue.DELETEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
                //logger.error(generalValue.DELETEORDER , error);
                return res.send(failedJsonRes(error, 500)); 
            }
            let end = getProcessingTime(start);
            //logger.info(`${generalValue.METHOD} ${generalValue.DELETEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
            return res.send(successJsonRes(message.deleteInventorySuccess, data=null))
          });
    } catch (error) {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.DELETEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
        //logger.error(generalValue.DELETEORDER , error);
        return res.send(failedJsonRes(error.message, 500));
    }

}