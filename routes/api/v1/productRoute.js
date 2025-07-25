const express = require('express');
const router = express();
const productController = require('../../../controllers/productController');

router.get('/:category', productController.getList);
router.get('/:search', productController.searchProduct);
router.post('/', productController.createProduct);

module.exports = router;
