const {homeController} = require("../controllers")
const express = require('express');
const router = express.Router();

router
  .route('/')
//   .get(auth('getUsers'), validate(userValidation.getUsers), userController.getUsers);
  .get(homeController.getWelcome);

module.exports = router;

