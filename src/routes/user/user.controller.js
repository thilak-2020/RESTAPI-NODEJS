const db = require('../../models/mysql')
const User = db.user
const { successJsonRes, failedJsonRes, getProcessingTime } = require('../../lib/helper')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../../config/auth.config')
const message = require('../../config/message.config')
const generalValue = require('../../config/constant');

exports.registerUser = async function(req, res) {
  start = getProcessingTime();
  //logger.info(generalValue.METHOD + generalValue.SIGN_IN);
  //logger.info(req.body);
  try {
    const user = req.body
    const userData = {
      username: user.name,
      password: bcrypt.hashSync(user.password, 8),
      usertype: 'CUSTOMER',
      mobilenumber: user.mobilenumber,
      email : user.email,
      shippingaddress: user.shippingaddress,
      billingaddress: user.billingaddress
    }

    await User.create(userData).then(data => {
      const userData = {
        userName: data.username
      }
      let end = getProcessingTime(start);
      //logger.info(`${generalValue.PROCESS} ${generalValue.REGISTERUSERS} ${end}${generalValue.LOG_TIME_UNIT}`);
      return res.send(successJsonRes('User was registered successfully!', userData))
    }).catch(error => {
      let end = getProcessingTime(start);
      //logger.info(`${generalValue.PROCESS} ${generalValue.REGISTERUSERS} ${end}${generalValue.LOG_TIME_UNIT}`);
      //logger.error(generalValue.REGISTERUSERS , error);
      return res.send(failedJsonRes(error.message, 500));
    })
  } catch (error) {
    let end = getProcessingTime(start);
    //logger.info(`${generalValue.PROCESS} ${generalValue.REGISTERUSERS} ${end}${generalValue.LOG_TIME_UNIT}`);
    //logger.error(generalValue.REGISTERUSERS , error);
    return res.send(failedJsonRes(error.message, 500));
  }
}

exports.signin = async function  (req, res) {
  try {
  const userRequestData = req.body
  User.findOne({
    where: {
      email: userRequestData.email
    }
  }).then(user => {
    if (!user) {
      return res.send(failedJsonRes(message.userNotFound))
    }

    const passwordIsValid = bcrypt.compareSync(
      userRequestData.password,
      user.password
    )

    if (!passwordIsValid) {
      return res.send(failedJsonRes(message.passwordInvalid, 401))
    }

    const token = jwt.sign({ id: user.id }, config.secret, {
      expiresIn: 86400 // 24 hours
    })

    const userToken = {
      id: user.userid,
      username: user.username,
      accessToken: token
    }
    return res.send(successJsonRes(message.userLoginSuccess, userToken)) 
  }) .catch(err => {
      res.status(500).send({ message: err.message })
    })
  } catch (error) {
    return res.send(failedJsonRes(error.message, 500));
  }
};

exports.getUser = async function  (req, res) {
  try{
  const id = req.params.id
  await User.findByPk(id,
    { attributes: ['userid', 'username', 'mobilenumber', 'billingaddress', 'shippingaddress'] })
    .then(data => {
      if (!data) {
        return res.send(failedJsonRes(message.userNotFound, 404))
      }
      return res.send(successJsonRes(message.getUserSuccess, data))
    }).catch(err => {
      return res.send(failedJsonRes(err.message || message.getUserError, 500))
    });
  } catch (error) {
    return res.send(failedJsonRes(error.message, 500));
  }
    
}

exports.updateUser = async function (req, res) {
  try {
    const user = req.body;
    if (!user.username || !user.mobilenumber || user.email) {
      return res.send(failedJsonRes(message.emptyPayload))
    }  
    const userData = {
      username: user.username,
      usertype: 'CUSTOMER',
      mobilenumber: user.mobilenumber,
      email : user.email,
      shippingaddress: user.shippingaddress,
      billingaddress: user.billingaddress
    }

    if(user.password) {
      if (config.passwordMinLength >= user.password.length) {
        return res.send(failedJsonRes(`${message.passwordLength} ${config.passwordMinLength} characters.`))
      } else {
        userData.password = bcrypt.hashSync(user.password, 8);
      }
    }
    
    await User.update(
      userData,
      { where: {userid: req.params.userId} }
    ).then(userData => {
      res.send(successJsonRes("User profile updated successfully.",userData=null));
    }).catch(err => {
      return res.send(failedJsonRes(err.message || message.getUserError, 500))
    });
  } catch (error) {
    return res.send(failedJsonRes(error.message, 500));
  }
}