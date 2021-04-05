const express = require('express');
const messageRoute = require('./message.route');
const homeRoute = require("./home.route")
const router = express.Router();

const defaultRoutes = [
  {
    path: "/",
    route: homeRoute,
  },
  {
    path: "/message",
    route: messageRoute
  },
];


defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

module.exports = router;
