const express = require('express');
const router = express.Router();
const productsController = require('../controllers/product');

// Get all products
router.get('/product', productsController.getProducts);

// Create a new product
router.post('/product', productsController.createProducts);

//Get a product
router.get('/product/:id', productsController.getProductById);

// Delete a product
router.delete('/product/:id', productsController.deleteProduct);

module.exports = router;