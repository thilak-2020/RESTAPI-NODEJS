module.exports = (sequelize, Sequelize) => {
    const supplier = sequelize.define('sms_supplier_master', {
        supplier_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        supplier_name : {
            type : Sequelize.STRING,
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
    return supplier;
}