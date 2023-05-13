const db = require('../../models/mysql')
const PurchaseOrder  = db.purchaseorder;
const PurchaseItem = db.purchaseorderitem;
const Product = db.product;
const Supplier = db.supplier;
const { successJsonRes, failedJsonRes, getProcessingTime } = require('../../lib/helper')
const message = require('../../config/message.config')
const generalValue = require('../../config/constant');
const date = require('date-and-time');
const Op = db.Sequelize.Op;

exports.createPurchaseOrder = async function(req, res) {
    let start = getProcessingTime();
    //logger.info(generalValue.METHOD + generalValue.CREATEPURCHASEORDER);
    //logger.info(req.body);
    let purchaseOrder = req.body;
    try {
      if(productList.length === 0) {
        return res.send(failedJsonRes(error.ProductNotFound, generalValue.API_VAL_ERROR));
      }
      const purchaseOrderData = {
        po_date	: purchaseOrder.purchaseorddate,
        supplier_id	 : purchaseOrder.supplierid,
        po_status : 'CREATED'
      }
      const productList = purchaseOrder.productlist;
      await PurchaseOrder.create(purchaseOrderData).then(async purchaseOrderData => {

        if(productList.length > 0) {
          productList.forEach(async (proItem, index) => {
                const productListData =  {
                    po_id	: purchaseOrderData.po_id,
                    product_id	 : proItem.productid,
                    product_qty : proItem.qty
                }
                await PurchaseItem.create(productListData);
            });
        }
        const supplierName = await getSupplierName(purchaseOrderData.supplier_id);
        const poProductList = await  getPOProductList(purchaseOrderData.po_id);
       
         const purchaseOrder  = {
            purchaseOrderId : purchaseOrderData.po_id,
            purchaseOrderDate : date.format(purchaseOrderData.po_date, generalValue.USER_TIMESTAMP_FORMAT),
            supplierName : supplierName,
            purchaseOrderStatus : purchaseOrderData.po_status,
            poProductList: poProductList
        }
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.CREATEPURCHASEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
        return res.send(successJsonRes(message.purchaseOrderCreateSuccess, purchaseOrder))
      }).catch(error => {
        let end = getProcessingTime(start);
        //logger.info(`${generalValue.METHOD} ${generalValue.CREATEPURCHASEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
        //logger.error(generalValue.CREATEPURCHASEORDER , error);
        return res.send(failedJsonRes(error.message, 500));

      });
    } catch (error) {
      let end = getProcessingTime(start);
      //logger.info(`${generalValue.METHOD} ${generalValue.CREATEPURCHASEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
      //logger.error(generalValue.CREATEPURCHASEORDER , error);
      return res.send(failedJsonRes(error.message, 500));
    }
}

async function getSupplierName(supplierId) {
    let supplierName = "";
    await Supplier.findByPk(supplierId) .then(data => {
      supplierName =  data.supplier_name;
    }).catch(err => {
      supplierName = ""
    });
    return supplierName;
}

async function getPOProductList(purchaseOrderId) {
  const purchaseItems = await PurchaseItem.findAll({
    where : {
      po_id : purchaseOrderId,
    },
    attributes: ['po_id', 'product_id', 'product_qty', 'product_price', 'product_discount'],
    include:[{
      as:"product",
      model: Product,
    attributes: ['product_name']}]
  });
  return purchaseItems;
}

exports.updatePurchaseOrder = async function(req, res) {
  let start = getProcessingTime();
  //logger.info(generalValue.METHOD + generalValue.UPDATEPURCHASEORDER);
  //logger.info(req.body);
  let purchaseOrder = req.body;
  try {
    const purchaseOrderData = {
      supplier_id: purchaseOrder.supplierid,
      po_status :  purchaseOrder.postatus,
    }
    await PurchaseOrder.update(
      purchaseOrderData,
      { where: {po_id: purchaseOrder.purchaseorderid} }
    ).then(async data => {
      if(purchaseOrder.productlist.length > 0) {
         await updateProductItems(purchaseOrder.productlist, purchaseOrder.purchaseorderid);
      }
      let end = getProcessingTime(start);
      //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
      return res.send(successJsonRes("Purchase order updated successfully.",data=null));
    }).catch(error => {
      let end = getProcessingTime(start);
      //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
      //logger.error(generalValue.UPDATEPURCHASEORDER , error);
      return res.send(failedJsonRes(error.message, 500));
    }); 
  } catch (error) {
    let end = getProcessingTime(start);
    //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} ${end}${generalValue.LOG_TIME_UNIT}`);
    //logger.error(generalValue.UPDATEPURCHASEORDER , error);
    return res.send(failedJsonRes(error.message, 500));
  }

}

async function updateProductItems(productList, purchaseOrderId) {
  productList.forEach(async (productItem) => {
      const purchaseItems = await PurchaseItem.findAll({
        where : {
          po_id : purchaseOrderId,
          product_id : productItem.productid
        }
      });
      const productListData =  {
        po_id	: purchaseOrderId,
        product_id	 : productItem.productid,
        product_qty : productItem.qty,
        product_price : productItem.price ? productItem.price :null,
        product_discount : productItem.discount ? productItem.discount :null
      }
      if (purchaseItems.length === 0 ) {
        await PurchaseItem.create(productListData).then(data => {
          //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} : successfully create purchase order items `);
        }).catch(error => {
          //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} : create purchase order items`);
          //logger.error(generalValue.UPDATEPURCHASEORDER , error);
        });
      } else {
        await PurchaseItem.update(
          productListData,{
            where : {
              po_id : purchaseOrderId,
              product_id : productItem.productid
            }
          }
        ).then(data => {
          //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} : successfully update purchase order items`);
        }).catch(error => {
          //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} update purchase order items`);
          //logger.error(generalValue.UPDATEPURCHASEORDER , error);
        });
      }
  });

  const purchaseItemsList = await PurchaseItem.findAll({
    where : {
      po_id : purchaseOrderId,
    }
  });
  let reqProductList = [];
  let productItemList = [];
  productList.forEach((productListItem) => {
    reqProductList.push(productListItem.productid);
  });
  purchaseItemsList.forEach((productItem) => {
    productItemList.push(productItem.product_id);
  });
  let delProductList = productItemList.filter(d => !reqProductList.includes(d));
  delProductList.forEach(async (delItem) => {
    await PurchaseItem.destroy( {
      where : {
        po_id : purchaseOrderId,
        product_id : delItem
      }
    }).then(data => {
      //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} : successfully delete purchase order items`);
    }).catch(err => {
      //logger.info(`${generalValue.METHOD} ${generalValue.UPDATEPURCHASEORDER} delete purchase order items`);
      //logger.error(generalValue.UPDATEPURCHASEORDER , error);
    })
  });
}

exports.purchaseOrderReport = async function(req, res) {
  let start = getProcessingTime();
  //logger.info(generalValue.METHOD + generalValue.PURCHASEORDERREPORT);
  //logger.info(req.body);
  const reportOptions = req.body;
  let where = "";
  if (reportOptions.filter === "SUPPLIER") {
    where = {
      supplier_id :  reportOptions.filterValue
    }
  } else if (reportOptions.filter === "STATUS") {
    where = {
      po_status :  reportOptions.filterValue
    }
  } else if (reportOptions.filter === "DATE") {
    console.log(reportOptions.rangeFrom,reportOptions.rangeTo)
    where = {
      po_date: {
        [Op.and]: {
          [Op.gte]: reportOptions.rangeFrom,
          [Op.lte]: reportOptions.rangeTo,
        }
      }
    }
  }
  try {
    const purchaseOrders = await PurchaseOrder.findAll({
      where: where,
      attributes: ['po_id', 'po_date', 'po_status'],
      include:[
      {
        as:"supplier",
        model: Supplier,
        attributes: ['supplier_name']
      },
      {
        as:"purchaseOrderItem",
        model: PurchaseItem,
        include:[
          {
            as:"product",
            model: Product,
            attributes: ['product_name']
          }
        ]
      }
    ]      
    });
    let end = getProcessingTime(start);
    //logger.info(`${generalValue.METHOD} ${generalValue.PURCHASEORDERREPORT} ${end}${generalValue.LOG_TIME_UNIT}`);
    return res.send(successJsonRes("Purchase order report generated successfully.",purchaseOrders));
  } catch (error) {
    let end = getProcessingTime(start);
    //logger.info(`${generalValue.METHOD} ${generalValue.PURCHASEORDERREPORT} ${end}${generalValue.LOG_TIME_UNIT}`);
    return res.send(failedJsonRes(error.message, 500));
  }
}

