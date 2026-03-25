const express = require('express');
const router = express.Router();
const { products, nextId } = require('../data');

// POST /products - Create a new product
router.post('/', (req, res) => {
  const { name, quantity, price, category } = req.body;

  // Validate required fields
  if (!name || !quantity || !price || !category) {
    return res.status(400).json({ error: 'All fields are required: name, quantity, price, category' });
  }

  const newProduct = {
    productId: nextId(),
    name,
    quantity,
    price,
    category
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// GET /products - Get all products
router.get('/', (req, res) => {
  res.status(200).json(products);
});

// GET /products/:productId - Get a single product
router.get('/:productId', (req, res) => {
  const product = products.find(p => p.productId === parseInt(req.params.productId));

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  res.status(200).json(product);
});

// PUT /products/:productId - Update a product
router.put('/:productId', (req, res) => {
  const product = products.find(p => p.productId === parseInt(req.params.productId));

  if (!product) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const { name, quantity, price, category } = req.body;

  if (name) product.name = name;
  if (quantity) product.quantity = quantity;
  if (price) product.price = price;
  if (category) product.category = category;

  res.status(200).json(product);
});

// DELETE /products/:productId - Delete a product
router.delete('/:productId', (req, res) => {
  const index = products.findIndex(p => p.productId === parseInt(req.params.productId));

  if (index === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const deleted = products.splice(index, 1);
  res.status(200).json({ message: 'Product deleted', product: deleted[0] });
});

module.exports = router;
