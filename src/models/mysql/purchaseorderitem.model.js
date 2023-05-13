module.exports = (sequelize, Sequelize) => {
    const purchaseOrderItem = sequelize.define('sms_purchase_order_items', {
        po_item_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        po_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'sms_purchase_order',
                key: 'po_id',
            }
        },
        product_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'sms_product_master',
                key: 'product_id',
            },
            allowNull: false
        },
        product_qty : {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        product_price : {
            type: Sequelize.INTEGER,
            allowNull: true
        },	
        product_discount : {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
            field: 'created_at'
          },
          updatedAt: {
            type: 'TIMESTAMP',
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
            allowNull: false,
            field: 'updated_at'
          }    

    });
    return purchaseOrderItem;
}