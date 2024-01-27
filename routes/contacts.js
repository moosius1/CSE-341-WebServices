const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/contacts');
//Week 2 routes
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);

//Week 3 routs
router.post('/', contactsController.createNew);
router.put('/:id', contactsController.updateExisting);
router.delete('/:id', contactsController.deleteEntry);


module.exports = router;