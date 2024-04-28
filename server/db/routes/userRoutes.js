// /routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { getDb } = require('..');

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

const User = require('../models/user'); // Path to your User model

router.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).send('Email and password are required.');
  }
  if (password.length < 7) {
    return res.status(400).send('Password must be at least 7 characters long.');
  }
  try {
    const user = new User(req.body);
    await user.save();
    res.status(201).send({ user });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});



const jwt = require('jsonwebtoken');
const jwt_secret = process.env.LOGIN_KEY; // Use the environment variable


router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }

    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).send({ error: 'Invalid login credentials' });
    }

    // Generate a token
    const token = jwt.sign({ _id: user._id.toString() }, jwt_secret, { expiresIn: '2 hours' });

    res.send({ user, token });
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
 