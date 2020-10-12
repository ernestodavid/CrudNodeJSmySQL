const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerControler');

//router.get('/', customerController.save);
router.get('/', customerController.list);
router.post('/add', customerController.save)
router.get('/delete/:id', customerController.delete)
module.exports = router;