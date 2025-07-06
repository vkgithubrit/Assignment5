

// const express = require('express');
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// // Load environment variables
// dotenv.config();
// console.log('Loaded MONGO_URI:', process.env.MONGO_URI); // Debug

// const itemRoutes = require('./routes/itemRoutes');


// server.js

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load environment variables from .env
dotenv.config();

// Debug print to check if .env is loaded correctly
console.log('Loaded MONGO_URI:', process.env.MONGO_URI);

const itemRoutes = require('./routes/itemRoutes');

const app = express();
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err.message));

// API Routes
app.use('/api/items', itemRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
