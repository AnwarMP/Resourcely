// server.js
require('dotenv').config(); // Load environment variables from .env file

const express = require('express');
const { connectToDatabase } = require('./db'); // MongoDB connection
const userRoutes = require('./db/routes/userRoutes'); // User routes

const app = express();

// Middleware for parsing JSON. This is body-parser equivalent in express 4.16+
app.use(express.json());

// Routes
app.use('/api', userRoutes); // Prefixed all user routes with '/api' for namespacing

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB and start the server
connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database connection failed', error);
    process.exit(1);
  });
