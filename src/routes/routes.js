const express = require('express');
const router = express.Router();
const testController = require('../controllers/controllers');

router.post('/:dynamicnumber', testController.handleTest);

module.exports = router;