require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/auth'); // Ensure this path is correct
const applicationRoutes = require('./routes/Details'); // Ensure this path is correct

const mlApplicationRoutes = require('./routes/mlApplication');

const cloudRoutes = require('./routes/cloudRoutes');
const uipathRoutes = require('./routes/uipathRoutes');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB connection error:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/application', applicationRoutes);
app.use('/ml', mlApplicationRoutes);
app.use('/cloud', cloudRoutes);
app.use('/uipath', uipathRoutes);

// Start Server
const PORT = process.env.PORT || 5000; // Use PORT from .env or default to 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
