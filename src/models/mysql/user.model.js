module.exports = (sequelize, Sequelize) => {
  const user = sequelize.define('sms_user_master', {
    userid: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password can not be empty'
        }
      }
    },
    usertype: {
      type: Sequelize.ENUM,
      values: ['ADMIN', 'CUSTOMER'],
      allowNull: false

    },
    email : {
      type: Sequelize.STRING,
      allowNull: false,
      validate:{
        isEmail : { args: true, msg: 'Invalid email address.' }
    }
    },
    mobilenumber: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [10],
      validate: {
        notNull: { args: true, msg: 'You must enter phone number.' },
        len: { args: [10, 10], msg: 'Phone number is invalid.' },
        isInt: { args: true, msg: 'You must enter phone number' }
      }
    },
    shippingaddress: {
      type: Sequelize.STRING,
      allowNull: true
    },
    billingaddress: {
      type: Sequelize.STRING,
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
  })
  return user
}
