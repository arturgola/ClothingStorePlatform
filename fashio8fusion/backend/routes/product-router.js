const express = require('express');
const {
  getLatest,
  getWomens,
  getMens,
  createProduct,
  deleteProduct,
  putProduct,
  patchProduct,
  getProduct,
} = require('../controllers/product-controller');

const router = express.Router();

// GET Homepage/Latest products (1 mens 1 womens)
router.get('/latest', getLatest);

// GET all Womenswear
router.get('/women', getWomens);

// GET all Menswear
router.get('/men', getMens);

// GET a single product
router.get('/product/:id', getProduct);

// POST a new product
router.post('/product', createProduct);

// DELETE a product
router.delete('/product/:id', deleteProduct);

// Update product using PATCH
router.patch('/product/:id', patchProduct);

// Update product using PUT
router.put('/product/:id', putProduct);

module.exports = router;
