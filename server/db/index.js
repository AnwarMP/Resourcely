// /db/index.js
const { MongoClient } = require('mongodb');

const dbName = "resourcelybackend"; // Use the environment variable


const uri = process.env.DB_URI; // Use the environment variable
const client = new MongoClient(uri);



let db = null;

async function connectToDatabase() {
  try {
    // Connect to the MongoDB cluster
    await client.connect();
    
    // Select the database through the connection
    db = client.db(dbName); // Replace with your actual database name

    console.log("Successfully connected to MongoDB.");
  } catch (e) {
    console.error(e);
  }
}

function getDb() {
  if (!db) {
    throw new Error('No database connection. Please call connectToDatabase first.');
  }
  return db;
}

module.exports = {
  connectToDatabase,
  getDb
};
