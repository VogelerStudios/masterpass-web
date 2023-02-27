const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

// import Schema
const ticketC = require('../controllers/ticketController');

// Methods
/* --> POST Method <-- */
router.post('/',ticketC.create);

/* --> GET Method <-- */
router.get('/',ticketC.getAll);

router.get('/:id',ticketC.get);

/* --> PATCH Method <-- */
router.patch('/:id',ticketC.update);

/* --> DELETE Method <-- */
router.delete('/:id',ticketC.remove);

module.exports = router;