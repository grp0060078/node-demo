const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

// Define routes for CRUD operations
router.get('/', usersController.getUsers);
router.get('/:id', usersController.getUserById);
router.post('/', usersController.createUser);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
