const express = require('express');
const userRoute = require('./user.route');
const homeRoute = require('./home.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: homeRoute
  },
  {
    path: '/user',
    route: userRoute,
  },
  
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
