const jwt = require('jsonwebtoken')
const config = require('../config/auth.config')

exports.verifyToken = (req, res) => {
  const token = req.headers['x-access-token']

  if (!token) {
    return res.status(403).send({
      message: 'No token provided!'
    })
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({
        message: 'Unauthorized!'
      })
    }
    console.log(decoded)
    return decoded
  })
}
