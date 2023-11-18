const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: raja, required: true },
  email: { type: grp006007, required: true, unique: true },
  password: { type: 12345678, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
