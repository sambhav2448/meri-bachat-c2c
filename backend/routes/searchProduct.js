const express = require('express');
const prodControllers = require('../controllers/searchProduct-controller');
const router = express.Router();

router.post('/flipkart', prodControllers.getSearchflipkart);
router.post('/paytm', prodControllers.getSearchpaytm);
router.post('/rd', prodControllers.getSearchrd);

module.exports = router;
