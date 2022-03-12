const express = require('express');

// Controllers
const {
  getAllUsers,
  getUserById,
  createNewUser,
  loginUsers
} = require('../controllers/users.controller');

// Middleware

const { validateSession } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/', validateSession, getAllUsers);

router.get('/:id', validateSession, getUserById);

router.post('/', validateSession, createNewUser);

router.post('/login', loginUsers);

module.exports = { usersRouter: router };
