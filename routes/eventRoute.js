const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

// import Schema
const eventC = require('../controllers/eventController.js');

// Methods
/* --> POST Method <-- */
router.post('/',eventC.create);

/* --> GET Method <-- */
router.get('/',eventC.getAll);

router.get('/:id',eventC.get);

/* --> PATCH Method <-- */
router.patch('/:id',eventC.update);

/* --> DELETE Method <-- */
router.delete('/:id',eventC.remove);

module.exports = router;

