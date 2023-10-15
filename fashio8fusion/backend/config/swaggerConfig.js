const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Product API',
      version: '1.0.0',
      description: 'API for managing products and users',
    },
    servers: [
      {
        url: 'http://localhost:5001/api',
      },
    ],
  },
  apis: ['routes/product-router.js', 'routes/userRoutes.js'],
};

const specs = swaggerJsdoc(options);
module.exports = specs;
