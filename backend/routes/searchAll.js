const express = require('express');
const searchAllControllers = require('../controllers/searchAll-controller');
const router = express.Router();

router.post('/', searchAllControllers.getAllPrice);

module.exports = router;
