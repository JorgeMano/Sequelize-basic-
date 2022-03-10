const express = require('express');

// Controllers
const {
  getAllUsers,
  getUserById,
  createNewUser,
  loginUsers
} = require('../controllers/users.controller');

const router = express.Router();

router.get('/', getAllUsers);

router.get('/:id', getUserById);

router.post('/', createNewUser);

router.post('/login', loginUsers);

module.exports = { usersRouter: router };
