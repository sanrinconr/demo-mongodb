const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
const messageController = require('../controllers/message.controller');

const router = express.Router();

router
  .route('/getMessages')
//   .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);
  .get(messageController.getAllMessages);

router.route("/addMessage")
   .get(messageController.addMessage)

module.exports = router;

