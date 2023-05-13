const Router = require('express');
const userRouter = Router();
const { validationResult } = require('express-validator');
const userCtrl = require('./user.controller');
const { verifyToken } = require('../../middleware/authjwt');
var payLoad = require('../../config/payload');

userRouter.get('/:id', async (req, res) => {
  await verifyToken(req, res)
  await userCtrl.getUser(req, res)
});

userRouter.post('/', payLoad.userRegister, async (req, res) => {  
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
      }
      userCtrl.registerUser(req, res);
});

userRouter.put('/:userId', async (req, res) => {  
  await verifyToken(req, res);
  await userCtrl.updateUser(req, res);

});
userRouter.post('/signin', payLoad.userSignin , async(req,res)=> { 
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }
  userCtrl.signin(req, res);
});


module.exports = userRouter
