const express = require('express');
// const auth = require('../../middlewares/auth');
// const validate = require('../../middlewares/validate');
const homeController = require('../controllers/home.controller');

const router = express.Router();

router
  .route('/')
//   .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);
  .get(homeController.getWelcomeMessage);

router.route("/setMessage")
   .get(homeController.setWelcomeMessage)
module.exports = router;

