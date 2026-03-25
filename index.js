const express = require('express');
const app = express();
const productRoutes = require('./routes/products');

// Middleware to parse JSON
app.use(express.json());

// All product routes start with /products
app.use('/products', productRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
