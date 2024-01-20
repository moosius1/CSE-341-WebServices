// const express = require('express');
// const routes = express.Router();


// routes.use('/contacts', require('./contacts'))
// // const lesson1Controller = require('../controllers/lesson1');

// // routes.get('/', lesson1Controller.arthurRoute);
// // routes.get('/maxwell', lesson1Controller.maxwellRoute);
// // routes.get('/eddy', lesson1Controller.eddyRoute);

// module.exports = routes;

const express = require('express');
const router = express.Router();

router.use('/contacts', require('./contacts'))

module.exports = router;