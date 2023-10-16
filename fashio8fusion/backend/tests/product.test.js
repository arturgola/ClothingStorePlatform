const mongoose = require('mongoose');
const supertest = require('supertest');
const app = require('../app');
const api = supertest(app);
const Product = require('../models/product-model');
const User = require('../models/userModel');
const products = require('./data/products.js');

let authToken = null;

beforeAll(async () => {
  //let authToken = null;

  await User.deleteMany({});
  const userResponse = await api
    .post('/api/users/register')
    .send({ name: 'Matti', email: 'mattiv@matti.fi', password: 'R3g5T7#gh' });
  authToken = userResponse.body.token;
  // Perform user authentication and obtain the token
  // This might require additional setup depending on your authentication mechanism
  // ...
  // authToken = 'YOUR_AUTH_TOKEN';
});

describe('Product API', () => {
  let productId = null;

  beforeEach(async () => {
    await Product.deleteMany({});
    const response = await api
      .post('/api/product')
      .set('Authorization', `Bearer ${authToken}`)
      .send(products[0]);
    productId = response.body._id;
  });

  describe('POST /product', () => {
    test('should create a new product', async () => {
      const newProduct = {
        name: 'Sample Product',
        category: 'women',
        image: 'sample-image-url',
        sizes: [
          {
            size: 'S',
            quantity: 1,
          },
          {
            size: 'M',
            quantity: 1,
          },
          {
            size: 'L',
            quantity: 1,
          },
        ],
        price: 70,
        description: 'Sample product description',
      };

      const response = await supertest(app)
        .post('/api/product')
        .set('Authorization', `Bearer ${authToken}`)
        .send(newProduct)
        .expect(201);

      // Check if the response body matches the created product
      expect(response.body.name).toBe(newProduct.name);
      expect(response.body.category).toBe(newProduct.category);
      expect(response.body.image).toBe(newProduct.image);
      expect(response.body.sizes.length).toEqual(newProduct.sizes.length);
      expect(response.body.price).toBe(newProduct.price);
      expect(response.body.description).toBe(newProduct.description);

      // Check if the product is saved in the database
      const savedProduct = await Product.findById(response.body._id);
      expect(savedProduct).toBeTruthy();
      expect(savedProduct.name).toBe(newProduct.name);
      expect(savedProduct.category).toBe(newProduct.category);
      expect(savedProduct.image).toBe(newProduct.image);
      expect(savedProduct.sizes.length).toEqual(newProduct.sizes.length);
      expect(savedProduct.price).toBe(newProduct.price);
      expect(savedProduct.description).toBe(newProduct.description);
    });

    test('should return 400 if any required field is missing', async () => {
      await Product.deleteMany({});
      const invalidProduct = {
        // Missing required fields
      };

      const response = await supertest(app)
        .post('/api/product')
        .set('Authorization', `Bearer ${authToken}`)
        .send(invalidProduct)
        .expect(400);

      // Check if the response contains the expected error message
      expect(response.body.error).toBe(
        'Please provide information for all fields'
      );

      // Check if the product is not saved in the database
      const products = await Product.find({});
      expect(products).toHaveLength(0);
    });
  });

  describe('GET /product/:id', () => {
    test('should get a single product by ID', async () => {
      await api
        .get(`/api/product/${productId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(200)
        .expect('Content-Type', /application\/json/);

      //expect(response.body.name).toBe('Sample Product');
    });

    test('should return 404 if product ID is invalid', async () => {
      const invalidId = 'invalid-id';
      await api.get(`/product/${invalidId}`).expect(404);
    });
  });

  describe('PUT /product/:id', () => {
    test('should update an existing product using PUT', async () => {
      const response = await api
        .get(`/api/product/${productId}`)
        .set('Authorization', `Bearer ${authToken}`);

      if (response.body.length > 0) {
        const productId = response.body[0]._id;

        const updatedProduct = {
          name: 'Updated Product',
          price: 60,
        };

        await api
          .put(`/product/${productId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .send(updatedProduct)
          .expect(200);

        const updatedProductresponse = await api
          .get(`/product/${productId}`)
          .set('Authorization', 'bearer ' + token);
        expect(updatedProductresponse.body.name).toBe('Updated Product');
        expect(response.body.price).toBe(60);
      }
    });

    test('should return 404 if product ID is invalid', async () => {
      const invalidId = 'invalid-id';
      await api
        .put(`/api/product/${invalidId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });

  describe('PATCH /product/:id', () => {
    test('should update an existing product using PATCH', async () => {
      const response = await api
        .get(`/api/product/${productId}`)
        .set('Authorization', `Bearer ${authToken}`);

      if (response.body.length > 0) {
        const productId = response.body[0]._id;

        const updatedProduct = {
          price: 60,
        };

        await api
          .patch(`/api/product/${productId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .send(updatedProduct)
          .expect(200);

        const patchedProductresponse = await api
          .get(`/api/product/${productId}`)
          .set('Authorization', 'bearer ' + token);
        expect(patchedProductresponse.body.price).toBe(60);
      }
    });

    test('should return 404 if product ID is invalid', async () => {
      const invalidId = 'invalid-id';
      await api
        .patch(`/api/product/${invalidId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });

  describe('DELETE /product/:id', () => {
    test('should delete an existing product', async () => {
      const response = await api
        .get(`/api/product/${productId}`)
        .set('Authorization', `Bearer ${authToken}`);

      if (response.body.length > 0) {
        const productId = response.body[0]._id;

        await api
          .delete(`/api/product/${productId}`)
          .set('Authorization', `Bearer ${authToken}`)
          .expect(204);

        // Verify that the product has been deleted
        await api.get(`/api/product/${productId}`).expect(404);
      }
    });

    test('should return 404 if product ID is invalid', async () => {
      const invalidId = 'invalid-id';
      await api
        .delete(`/api/product/${invalidId}`)
        .set('Authorization', `Bearer ${authToken}`)
        .expect(404);
    });
  });
});

afterAll(async () => {
  // Clean up and close the database connection
  await mongoose.connection.close();
});
