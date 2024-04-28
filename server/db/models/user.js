const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
    // Add any additional validation you might want
  },
  password: {
    type: String,
    required: true,
    minlength: 7,
    trim: true,
  },
  // Include other fields as needed, such as 'name', 'createdAt', etc.
});

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }
  next();
});

const User = mongoose.model('User', userSchema);

module.exports = User;
