const routes = require('express').Router();
const lesson1Controller = require('../controllers/lesson1');

routes.get('/', lesson1Controller.arthurRoute);
routes.get('/maxwell', lesson1Controller.maxwellRoute);
routes.get('/eddy', lesson1Controller.eddyRoute);

module.exports = routes;