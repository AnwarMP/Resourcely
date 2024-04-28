// server.js
require('dotenv').config(); // As early as possible in your application
// ...
const express = require('express');
const { connectToDatabase } = require('./db'); // Import the connectToDatabase function

const app = express();

// ... Any other middleware like bodyParser goes here ...

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to MongoDB
connectToDatabase().catch(console.error);

// ... Define your routes ...

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const userRoutes = require('./routes/userRoutes'); // Import the routes


app.use('/api', userRoutes); // Use the routes

