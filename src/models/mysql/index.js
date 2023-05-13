const dbConfig = require('../../config/dbconfig.js')
const Sequelize = require('sequelize')
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  port: dbConfig.PORT,
  operatorsAliases: 0,
  define: {
    freezeTableName: true
  },
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
db.user = require('./user.model.js')(sequelize, Sequelize);
db.purchaseorder  = require('./purchaseorder.model.js')(sequelize, Sequelize);
db.purchaseorderitem = require('./purchaseorderitem.model.js')(sequelize, Sequelize);
db.supplier = require('./supplier.model.js')(sequelize, Sequelize);
db.product = require('./product.model.js')(sequelize, Sequelize);

db.purchaseorder.hasMany(db.purchaseorderitem, {
  foreignKey: "po_id",
  as: "purchaseOrderItem",
});

db.purchaseorder.belongsTo(db.supplier, {
  foreignKey: "supplier_id",
  as: "supplier",
});

db.purchaseorderitem.belongsTo(db.product, {
  foreignKey: "product_id",
  as: "product",
});

module.exports = db;
