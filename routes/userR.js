const express = require('express');
const { restart } = require('nodemon');
const router = express.Router();

// import Schema
const userC = require('../controllers/userC')

// Methods
/* --> POST Method <-- */
router.post('/user',userC.create);

/* --> GET Method <-- */
router.get('/user',userC.getAll);

router.get('/user/:id',userC.get);

/* --> PATCH Method <-- */
router.patch('/user/:id',userC.update);

/* --> DELETE Method <-- */
router.delete('/user/:id',userC.remove);

module.exports = router;