const Product = require('../models/product-model');
const mongoose = require('mongoose');

// create a new product
const createProduct = async (req, res, next) => {
  try {
    const { name, category, image, sizes, price, description } = req.body;

    if (!name || !category || !image || !sizes || !price || !description) {
      const error = new Error('Please provide information for all fields');
      error.statusCode = 400;
      throw error;
    }

    const product = await Product.create({
      name,
      category,
      image,
      sizes,
      price,

      description,
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// get all womens clothings
const getWomens = async (req, res, next) => {
  try {
    const womens = await Product.find({ category: 'women' }).sort({
      createdAt: -1,
    });

    res.status(200).json(womens);
  } catch (error) {
    next(error);
  }
};

// get all mens clothings
const getMens = async (req, res, next) => {
  try {
    const mens = await Product.find({ category: 'men' }).sort({
      createdAt: -1,
    });

    res.status(200).json(mens);
  } catch (error) {
    next(error);
  }
};

// get a single product
const getProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error('No product with specified ID');
      error.statusCode = 404;
      throw error;
    }

    const product = await Product.findById(id);

    if (!product) {
      const error = new Error('No product with specified ID');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json(product);
  } catch (error) {
    next(error);
  }
};

// delete a product
const deleteProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error('No product with specified ID');
      error.statusCode = 404;
      throw error;
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      const error = new Error('No product with specified ID');
      error.statusCode = 404;
      throw error;
    }

    res.status(204).json(deletedProduct);
  } catch (error) {
    next(error);
  }
};

// update product using PATCH
const patchProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, category, image, sizes, price, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error('No product with specified ID');
      error.statusCode = 404;
      throw error;
    }

    if (!name && !category && !image && !sizes && !price && !description) {
      const error = new Error(
        'Please provide information for at least one field'
      );
      error.statusCode = 404;
      throw error;
    }

    const patchedProduct = await Product.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
      }
    );

    if (!patchedProduct) {
      const error = new Error('No product with specified ID');
      error.statusCode = 404;
      throw error;
    }

    res.json(patchedProduct);
  } catch (error) {
    next(error);
  }
};

// update product using PUT
const putProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, category, image, sizes, price, description } = req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      const error = new Error('No product with specified ID');
      error.statusCode = 404;
      throw error;
    }

    if (!name || !category || !image || !sizes || !price || !description) {
      const error = new Error('Please provide information for all fields');
      error.statusCode = 404;
      throw error;
    }

    const replacedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      overwrite: true,
    });

    if (!replacedProduct) {
      const error = new Error('No product with specified ID');
      error.statusCode = 404;
      throw error;
    }

    res.status(200).json(replacedProduct);
  } catch (error) {
    next(error);
  }
};

const searchProducts = async (req, res, next) => {
  try {
    const searchQuery = req.query.query;

    const pipeline = [
      {
        $search: {
          index: 'default',
          text: {
            query: searchQuery,
            path: {
              wildcard: '*',
            },
            fuzzy: {},
          },
        },
      },
    ];

    const results = await Product.aggregate(pipeline);
    res.status(200).json(results);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getWomens,
  getMens,
  getProduct,
  createProduct,
  deleteProduct,
  putProduct,
  patchProduct,
  searchProducts,
};
