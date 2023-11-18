const express = require('express');
const mongoose = require('mongoose');
const User = require('./models/User');
const userRouter = require('./controllers/users');


// Fetch all users
const getUsers = async (req, res) => {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Fetch a user by ID
  const getUserById = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Create a new user
  const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
      const user = new User({ name, email, password });
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Update a user by ID
  const updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;
    try {
      const user = await User.findByIdAndUpdate(
        id,
        { name, email, password, updatedAt: Date.now() },
        { new: true } // returns the updated user
      );
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };
  
  // Delete a user by ID
  const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findByIdAndDelete(id);
      if (user) {
        res.json({ message: 'User deleted successfully' });
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  };



const app = express();
const PORT = 3000;
const HOSTNAME ="127.0.0.1"
// Connect to MongoDB
mongoose.connect('mongodb://localhost/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Use the userRouter for /users routes
app.use('/users', userRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://${HOSTNAME}:${PORT}`);
});
