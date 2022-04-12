const express = require('express');
const config = require('../../config/config');
const authRoute = require('./auth.route');
const commentRoute = require('./comment.route');
const communityRoute = require('./community.route');
const userRoute = require('./user.route');
const docsRoute = require('./docs.route');
const postRoute = require('./post.route');

const router = express.Router();

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoute,
  },
  {
    path: '/users',
    route: userRoute,
  },
  {
    path: '/comment',
    route: commentRoute,
  },
  {
    path: '/community',
    route: communityRoute,
  },
  {
    path: '/post',
    route: postRoute,
  },
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});

/* istanbul ignore next */
if (config.env === 'development') {
  devRoutes.forEach((route) => {
    router.use(route.path, route.route);
  });
}

module.exports = router;
