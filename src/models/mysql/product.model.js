module.exports = (sequelize, Sequelize) => {
    const product = sequelize.define('sms_product_master', {
        product_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        category_id: {
            type: Sequelize.INTEGER,
            references: {
                model: 'sms_category_master',
                key: 'category_id',
            }
        },
        product_name : {
            type: Sequelize.STRING,
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
    return product;
}   