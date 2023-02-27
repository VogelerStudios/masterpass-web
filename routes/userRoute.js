const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

// import Schema
const userC = require('../controllers/userController');

// Methods
/* --> POST Method <-- */
router.post('/',userC.create);

/* --> GET Method <-- */
router.get('/',userC.getAll);

router.get('/:id',userC.get);

/* --> PATCH Method <-- */
router.patch('/:id',userC.update);

/* --> DELETE Method <-- */
router.delete('/:id',userC.remove);

module.exports = router;