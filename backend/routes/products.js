const express = require('express');
const prodControllers = require('../controllers/product-controller');
const router = express.Router();

router.post('/flipkart', prodControllers.getflipkart);
router.post('/paytm', prodControllers.getcroma);
router.post('/rd', prodControllers.getamazon);

module.exports = router;
