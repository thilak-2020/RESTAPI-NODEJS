const db = require('../../models/mongodb');
const { successJsonRes, failedJsonRes, getProcessingTime } = require('../../lib/helper')
const message = require('../../config/message.config')
const generalValue = require('../../config/constant');

exports.createInventory = async function(req, res) {
    let start = getProcessingTime();    
    let reqInventoryData = req.body;
    try {
        const inventoryData = {
            product_name: reqInventoryData.product_name,
            category_name: reqInventoryData.category_name,
            qty: reqInventoryData.qty,
            price : reqInventoryData.price,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }; 
        db.Inventory.create(inventoryData).then(inventoryDataRes => {
            let end = getProcessingTime(start);
            //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYCREATE} ${end}${generalValue.LOG_TIME_UNIT}`);
            return res.send(successJsonRes(message.createInventorySuccess, inventoryDataRes))
        });
    } catch (error) {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYCREATE} ${end}${generalValue.LOG_TIME_UNIT}`);
        //logger.error(generalValue.INVENTORYCREATE , error);
        return res.send(failedJsonRes(error.message, 500));
    }
}

exports.updateInventory = async function(req, res) {
    let start = getProcessingTime();    
    let reqInventoryData = req.body;
    try {
        let query = { _id : reqInventoryData.InventoryId };
        const inventoryData = {
            product_name: reqInventoryData.product_name,
            category_name: reqInventoryData.category_name,
            qty: reqInventoryData.qty,
            price : reqInventoryData.price,
            updatedAt: Date.now()
        }; 
        db.Inventory.updateOne(query , inventoryData, (error) => {
            if(error) {
                let end = getProcessingTime(start);
                //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYUPDATE} ${end}${generalValue.LOG_TIME_UNIT}`);
                //logger.error(generalValue.INVENTORYUPDATE , error);
                return res.send(failedJsonRes(error, 500)); 
            }
            let end = getProcessingTime(start);
            //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYUPDATE} ${end}${generalValue.LOG_TIME_UNIT}`);
            return res.send(successJsonRes(message.updateInventorySuccess, data=null))
        });
    } catch (error) {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYUPDATE} ${end}${generalValue.LOG_TIME_UNIT}`);
        //logger.error(generalValue.INVENTORYUPDATE , error);
        return res.send(failedJsonRes(error.message, 500));
    }

}

exports.deleteInventory = async function(req, res) {
    let start = getProcessingTime();  
    const productId = req.params.productId;  
    try {
        db.Inventory.deleteOne({ product_id: productId }, function(error) {
            if (error) {
                let end = getProcessingTime(start);
                //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYDELETE} ${end}${generalValue.LOG_TIME_UNIT}`);
                //logger.error(generalValue.INVENTORYDELETE , error);
                return res.send(failedJsonRes(error, 500)); 
            }
            let end = getProcessingTime(start);
            //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYUPDATE} ${end}${generalValue.LOG_TIME_UNIT}`);
            return res.send(successJsonRes(message.deleteInventorySuccess, data=null))
            });
    } catch (error) {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYDELETE} ${end}${generalValue.LOG_TIME_UNIT}`);
        //logger.error(generalValue.INVENTORYDELETE , error);
        return res.send(failedJsonRes(error.message, 500));
    }
}

exports.getInventoryReport = async function(req, res) {
    let start = getProcessingTime(); 
    let where = "";
    let filterOptions = req.body;
    if (filterOptions.filter === "PRICE") {
       where = {"price":parseInt(filterOptions.filterValue)}
    } else if (filterOptions.filter === "CATEGORY") {
        where = {"category_name": new RegExp(filterOptions.filterValue, "i") }
    } else if(filterOptions.filter === "PRODUCT") {
        where = {"product_name": new RegExp(filterOptions.filterValue, "i") }
    }
    try {
        let inventoryData;
        if (filterOptions.filter === "ALL") {
            inventoryData = await db.Inventory.find({}, {'__v': 0, '_id':0});
        } else {
            inventoryData = await db.Inventory.find( where , {
                '_id': 0, '__v': 0,
            });
        }
        return res.send(successJsonRes(message.getInventorySuccess, inventoryData))
    } catch (error) {
        let end = getProcessingTime(start);
        /*logger.info(`${generalValue.METHOD} ${generalValue.INVENTORYREPORT} ${end}${generalValue.LOG_TIME_UNIT}`);
        logger.error(generalValue.INVENTORYREPORT , error);*/
        return res.send(failedJsonRes(error.message, 500));
    }
}