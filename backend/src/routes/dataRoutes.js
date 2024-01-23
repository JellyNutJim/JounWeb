// src/routes/dataRoutes.js

const express = require('express');

// Routes
const getWords = require('../controllers/getWords');
const setWords = require('../controllers/updateWords');

const getUsers = require('../controllers/getUsers');
const updateUsers = require('../controllers/updateUsers');

const router = express.Router();

// Get
router.get('/api/getWords', getWords.GetWords); // getWords.func
router.get('/api/getUsers', getUsers.GetUsers); 

// Post
router.post('/api/updateUsers', updateUsers.UpdateUsers);

module.exports = router;