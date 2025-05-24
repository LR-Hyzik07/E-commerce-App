const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Import product data from the frontend
const products = require('../src/productdetail');

// Serve static files from the frontend build folder if exists, else serve from public folder
const buildPath = path.join(__dirname, '../build');
const publicPath = path.join(__dirname, '../public');
const fs = require('fs');

if (fs.existsSync(buildPath)) {
  app.use(express.static(buildPath));
} else {
  app.use(express.static(publicPath));
}

// API Routes
// Get all products
app.get('/api/products', (req, res) => {
  res.json(products);
});

// Submit an order
app.post('/api/orders', (req, res) => {
  const order = req.body;
  console.log('--- Order logging start ---');
  console.log('Order received:', JSON.stringify(order, null, 2));
  console.log('--- Order logging end ---');
  // Here you would normally save the order to a database
  res.status(201).json({ message: 'Order received successfully', order });
});

// Submit a contact message
app.post('/api/contact', (req, res) => {
  const message = req.body;
  console.log('Contact message received:', message);
  // Here you would normally save the message to a database or send an email
  res.status(201).json({ message: 'Contact message received successfully' });
});

// Serve the frontend for any other route
app.get('*', (req, res) => {
  if (fs.existsSync(path.join(buildPath, 'index.html'))) {
    res.sendFile(path.join(buildPath, 'index.html'));
  } else {
    res.sendFile(path.join(publicPath, 'index.html'));
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
