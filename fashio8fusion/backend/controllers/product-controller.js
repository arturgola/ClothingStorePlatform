const Product = require('../models/product-model');
const mongoose = require('mongoose');

// create a new product
const createProduct = async (req, res, next) => {
  try {
    const { name, category, image, price, countInStock, description } =
      req.body;

    if (
      !name ||
      !category ||
      !image ||
      !price ||
      !countInStock ||
      !description
    ) {
      return res
        .status(400)
        .json({ error: 'Please provide information for all fields' });
    }

    const product = await Product.create({
      name,
      category,
      image,
      price,
      countInStock,
      description,
    });

    res.status(201).json(product);
  } catch (error) {
    next(error);
  }
};

// get lastest product
const getLatest = async (req, res, next) => {
  try {
    const latestWomen = await Product.findOne(
      { category: 'women' },
      {},
      { sort: { _id: -1 } }
    );
    const latestMen = await Product.findOne(
      { category: 'men' },
      {},
      { sort: { _id: -1 } }
    );

    res.status(200).json([latestWomen, latestMen]);
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
      return res.status(404).json({ error: 'No product with specified ID' });
    }

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'No product with specified ID' });
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
      return res.status(404).json({ error: 'No product with specified ID' });
    }

    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ error: 'No product with specified ID' });
    }

    res.status(200).json(deletedProduct);
  } catch (error) {
    next(error);
  }
};

// update product using PATCH
const patchProduct = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, category, image, price, countInStock, description } =
      req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No product with specified ID' });
    }

    if (
      !name &&
      !category &&
      !image &&
      !price &&
      !countInStock &&
      !description
    ) {
      return res
        .status(400)
        .json({ error: 'Please provide information for at least one field' });
    }

    const patchedProduct = await Product.findByIdAndUpdate(
      id,
      { ...req.body },
      {
        new: true,
      }
    );

    if (!patchedProduct) {
      return res.status(404).json({ error: 'No product with specified ID' });
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
    const { name, category, image, price, countInStock, description } =
      req.body;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: 'No product with specified ID' });
    }

    if (
      !name ||
      !category ||
      !image ||
      !price ||
      !countInStock ||
      !description
    ) {
      return res
        .status(400)
        .json({ error: 'Please provide information for all fields' });
    }

    const replacedProduct = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
      overwrite: true,
    });

    if (!replacedProduct) {
      return res.status(404).json({ error: 'No product with specified ID' });
    }

    res.status(200).json(replacedProduct);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLatest,
  getWomens,
  getMens,
  getProduct,
  createProduct,
  deleteProduct,
  putProduct,
  patchProduct,
};
