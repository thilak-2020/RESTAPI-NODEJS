module.exports = (sequelize, Sequelize) => {
    const purchaseOrder = sequelize.define('sms_purchase_order', {
        po_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        po_date : {
            type : Sequelize.DATE,
            allowNull: false
        },
        supplier_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'sms_supplier_master',
                key: 'supplier_id',
            }
        },
        po_status : {
            type: Sequelize.ENUM,
            values: ['CREATED', 'APPROVED', 'RECEIVED'],
            allowNull: false
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
    return purchaseOrder;
}   