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
  searchProducts,
} = require('../controllers/product-controller');

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API endpoints for managing products
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         category:
 *           type: string
 *         image:
 *           type: string
 *         sizes:
 *           type: array
 *         price:
 *           type: number
 *         description:
 *           type: string
 *       required:
 *         - name
 *         - category
 *         - image
 *         - sizes
 *         - price
 *         - description
 *       example:
 *         name: Dress
 *         category: women
 *         image: /images/1.jpeg
 *         sizes:
 *            - size: S
 *              quantity: 1
 *            - size: M
 *              quantity: 1
 *         price: 50
 *         description: Women dress
 */

// GET all Womenswear
/**
 * @swagger
 * /women:
 *   get:
 *     summary: Get all womenswear products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Returns an array of all womenswear products
 *       500:
 *         description: Internal server error
 */
router.get('/women', getWomens);

// GET all Menswear
/**
 * @swagger
 * /men:
 *   get:
 *     summary: Get all menswear products
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Returns an array of all menswear products
 *       500:
 *         description: Internal server error
 */
router.get('/men', getMens);

// GET a single product
/**
 * @swagger
 * /product/{id}:
 *   get:
 *     summary: Get a single product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Returns a single product
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.get('/product/:id', getProduct);

// POST a new product
/**
 * @swagger
 * /product:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: New product object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       201:
 *         description: Workout created successfully
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal server error
 */
router.post('/product', createProduct);

// DELETE a product
/**
 * @swagger
 * /product/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to delete
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Product deleted successfully
 *       404:
 *         description: Product not found
 *       500:
 *         description: Internal server error
 */
router.delete('/product/:id', deleteProduct);

// Update product using PATCH
/**
 * @swagger
 * /product/{id}:
 *   patch:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated product object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Workout updated successfully
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.patch('/product/:id', patchProduct);

// Update product using PUT
/**
 * @swagger
 * /product/{id}:
 *   put:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the product to update
 *         schema:
 *           type: string
 *     requestBody:
 *       description: Updated product object
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       200:
 *         description: Workout updated successfully
 *       404:
 *         description: Workout not found
 *       500:
 *         description: Internal server error
 */
router.put('/product/:id', putProduct);

// Search product name
router.get('/search', searchProducts);

module.exports = router;
