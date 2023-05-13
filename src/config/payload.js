const { check } = require('express-validator');

exports.userRegister = [
  check('name').isString().withMessage("Name should be string"),
  check('password').isLength({ min: 8 }).withMessage("Please enter a password at least 8 character."),
  check('mobilenumber').isLuhnNumber().isLength({ min: 10 , max : 10}).withMessage("Please provide valid mobile number."),
  check('email').isEmail().withMessage('Please provide valid email address.')
]

exports.userSignin = [
  check('email').isEmail().withMessage('Please provide valid email address.'),
  check('password').isLength({ min: 8 }).withMessage("Please enter a password at least 8 character."), 
]

exports.purchaseOrder =  [
  check('supplierid').isNumeric().withMessage('Please provide valid supplier id.'),
  check('productlist').isArray().withMessage('Please provide valid product details.')
];

exports.updatePurchaseOrder = [
  check('purchaseorderid').isNumeric().withMessage('Please provide valid purchase order id.'),
  check('supplierid').isNumeric().withMessage('Please provide valid supplier id.'),
  check('postatus').isString().withMessage('Please provide valid po status.')
];

exports.purchaseOrderReport = [
  check('filter').isIn(['ALL','SUPPLIER', 'STATUS', 'DATE']).withMessage('Filter allowed only these values ALL,SUPPLIER,STATUS,DATE'),
  check('filterValue').isString().withMessage('Please provide valid filter value.').optional(),
  check('rangeFrom').optional({nullable: true }).isDate().withMessage('Please provide rangefrom date.'),
  check('rangeTo').isDate().optional({nullable: true }).withMessage('Please provide rangeto date.')
];

exports.createInventory = [
  check('category_name').isString().not().isEmpty().withMessage("Please provide valid category name."),
  check('product_name').isString().not().isEmpty().withMessage("Please provide valid product name."),
  check('qty').isNumeric().withMessage('Please provide valid qty.'),
  check('price').isNumeric().withMessage('Please provide valid price.')
]

exports.updateInventory = [
  check('inventoryId').isString().not().isEmpty().withMessage("Please provide valid invemtory id."),
  check('category_name').isString().not().isEmpty().withMessage("Please provide valid category name."),
  check('product_name').isString().not().isEmpty().withMessage("Please provide valid product name."),
  check('qty').isNumeric().withMessage('Please provide valid qty.'),
  check('price').isNumeric().withMessage('Please provide valid price.')
]

exports.inventoryReport = [
  check('filter').isIn(['ALL','PRICE', 'PRODUCT','CATEGORY']).withMessage('Filter allowed only these values All,PRICE,CATEGORY'),
  check('filterValue').isString().withMessage('Please provide valid filter value.').optional({nullable: true }),
]

exports.createOrder = [
  check('user_id').isString().not().isEmpty().withMessage("Please provide userid."),
  check('orderdate').not().isEmpty().withMessage("Please provide order date."),
  check('orderList').isArray().withMessage('Please provide order list.')
]

exports.updateOrder = [
  check('orderId').isString().not().isEmpty().withMessage("Please provide userid."),
  check('user_id').isString().not().isEmpty().withMessage("Please provide userid."),
  check('orderdate').not().isEmpty().withMessage("Please provide order date."),
  check('orderList').isArray().withMessage('Please provide order list.')
]

