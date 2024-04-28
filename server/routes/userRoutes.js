// /routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getDb } = require('../db');

// GET all users
router.get('/users', async (req, res) => {
  try {
    const db = getDb();
    const users = await db.collection('users').find().toArray();
    res.json(users);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
});

module.exports = router;
 